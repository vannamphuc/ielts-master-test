import {
  MOCK_NOW,
  MOCK_STUDENT_ID,
  mockAssignments,
} from "../data/assignments.ts";
import { getAssignmentStatus } from "../lib/assignment-status.ts";
import type { AssignmentWithStatus } from "../types/assignment";

export function getAssignmentsForCurrentStudent(): AssignmentWithStatus[] {
  return mockAssignments
    .filter((assignment) => assignment.studentId === MOCK_STUDENT_ID)
    .map((assignment) => ({
      ...assignment,
      ...getAssignmentStatus(assignment, MOCK_NOW),
    }));
}
