import { NextResponse } from "next/server";
import { getAssignmentsForCurrentStudent } from "@/services/assignment.service";

export function GET() {
  const assignments = getAssignmentsForCurrentStudent();

  return NextResponse.json({
    success: true,
    data: assignments,
    total: assignments.length,
  });
}
