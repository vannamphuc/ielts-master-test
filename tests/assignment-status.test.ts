import assert from "node:assert/strict";
import test from "node:test";
import { getAssignmentStatus } from "../src/lib/assignment-status.ts";
import type { Assignment } from "../src/types/assignment";

const NOW = "2026-11-11T09:00:00+07:00";

function buildAssignment(overrides: Partial<Assignment> = {}): Assignment {
  return {
    id: "T01",
    studentId: "S01",
    title: "Test assignment",
    deadline: "2026-11-13T23:59:00+07:00",
    submittedAt: null,
    ...overrides,
  };
}

test("returns PENDING when the deadline has not passed and nothing was submitted", () => {
  assert.deepEqual(getAssignmentStatus(buildAssignment(), NOW), {
    status: "PENDING",
    isLate: false,
  });
});

test("returns OVERDUE when the deadline passed and nothing was submitted", () => {
  assert.deepEqual(
    getAssignmentStatus(
      buildAssignment({ deadline: "2026-11-09T23:59:00+07:00" }),
      NOW,
    ),
    { status: "OVERDUE", isLate: false },
  );
});

test("returns SUBMITTED when submitted before the deadline", () => {
  assert.deepEqual(
    getAssignmentStatus(
      buildAssignment({
        deadline: "2026-11-10T23:59:00+07:00",
        submittedAt: "2026-11-10T20:00:00+07:00",
      }),
      NOW,
    ),
    { status: "SUBMITTED", isLate: false },
  );
});

test("returns SUBMITTED_LATE when submitted after the deadline", () => {
  assert.deepEqual(
    getAssignmentStatus(
      buildAssignment({
        deadline: "2026-11-08T23:59:00+07:00",
        submittedAt: "2026-11-10T12:00:00+07:00",
      }),
      NOW,
    ),
    { status: "SUBMITTED_LATE", isLate: true },
  );
});
