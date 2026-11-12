export interface Assignment {
  id: string;
  studentId: string;
  title: string;
  deadline: string;
  submittedAt: string | null;
}
export type AssignmentStatus =
  | "PENDING"
  | "OVERDUE"
  | "SUBMITTED"
  | "SUBMITTED_LATE";

export interface AssignmentStatusResult {
  status: AssignmentStatus;
  isLate: boolean;
}

export type AssignmentWithStatus = Assignment & AssignmentStatusResult;
