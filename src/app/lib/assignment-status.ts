import type { Assignment, AssignmentStatusResult } from "../types/assignment";

export function getAssignmentStatus(
  assignment: Assignment,
  now: string,
): AssignmentStatusResult {
  const deadline = new Date(assignment.deadline).getTime();
  const currentTime = new Date(now).getTime();

  // Đã nộp
  if (assignment.submittedAt) {
    const submittedTime = new Date(assignment.submittedAt).getTime();

    const isLate = submittedTime > deadline;

    return {
      status: isLate ? "SUBMITTED_LATE" : "SUBMITTED",
      isLate,
    };
  }

  // Chưa nộp và đã hết hạn
  if (currentTime > deadline) {
    return {
      status: "OVERDUE",
      isLate: false,
    };
  }

  // Chưa nộp và vẫn còn hạn
  return {
    status: "PENDING",
    isLate: false,
  };
}
