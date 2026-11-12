import { MOCK_NOW, mockAssignments } from "../data/assignments";
import { getAssignmentStatus } from "../lib/assignment-status";
import type { AssignmentWithStatus } from "../types/assignment";

const MOCK_STUDENT_ID = "S01";

export function getAssignmentsForCurrentStudent(): AssignmentWithStatus[] {
  return mockAssignments
    .filter((assignment) => assignment.studentId === MOCK_STUDENT_ID)
    .map((assignment) => ({
      ...assignment,
      ...getAssignmentStatus(assignment, MOCK_NOW),
    }));
}
