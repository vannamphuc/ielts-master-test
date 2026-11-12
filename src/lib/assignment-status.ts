import type { Assignment, AssignmentStatusResult } from "../types/assignment";

export function getAssignmentStatus(
  assignment: Assignment,
  now: string,
): AssignmentStatusResult {
  const deadline = new Date(assignment.deadline).getTime();
  const currentTime = new Date(now).getTime();

  if (assignment.submittedAt) {
    const isLate = new Date(assignment.submittedAt).getTime() > deadline;

    return {
      status: isLate ? "SUBMITTED_LATE" : "SUBMITTED",
      isLate,
    };
  }

  // quá hạn
  if (currentTime > deadline) {
    return { status: "OVERDUE", isLate: false };
  }

  // Chưa nộp
  return { status: "PENDING", isLate: false };
}
