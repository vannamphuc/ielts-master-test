import { NextResponse } from "next/server";
import { getAssignmentsForCurrentStudent } from "@/app/services/assignment.service";

export function GET() {
  const assignments = getAssignmentsForCurrentStudent();

  return NextResponse.json({
    success: true,
    data: assignments,
    total: assignments.length,
  });
}
