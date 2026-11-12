import assert from "node:assert/strict";
import test from "node:test";
import { getAssignmentsForCurrentStudent } from "../src/services/assignment.service.ts";

test("returns only the four S01 assignments with their statuses", () => {
  const assignments = getAssignmentsForCurrentStudent();

  assert.deepEqual(
    assignments.map(({ id, studentId }) => ({ id, studentId })),
    [
      { id: "A01", studentId: "S01" },
      { id: "A02", studentId: "S01" },
      { id: "A03", studentId: "S01" },
      { id: "A04", studentId: "S01" },
    ],
  );

  assert.deepEqual(
    Object.fromEntries(
      assignments.map(({ id, status, isLate }) => [id, { status, isLate }]),
    ),
    {
      A01: { status: "PENDING", isLate: false },
      A02: { status: "OVERDUE", isLate: false },
      A03: { status: "SUBMITTED", isLate: false },
      A04: { status: "SUBMITTED_LATE", isLate: true },
    },
  );
});

test("never exposes B01 from the other student", () => {
  const assignments = getAssignmentsForCurrentStudent();

  assert.equal(
    assignments.some(({ id }) => id === "B01"),
    false,
  );
});
