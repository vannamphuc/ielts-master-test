import type { AssignmentWithStatus } from "@/types/assignment";
import { StatusBadge } from "./StatusBadge";
import { TableCell, TableRow } from "@/components/ui/table";
import { dateTimeFormatter } from "@/lib/format";
import { cn } from "@/lib/utils";

const skillLabels: Record<string, string> = {
  A01: "Reading",
  A02: "Listening",
  A03: "Writing",
  A04: "Speaking",
};

export function AssignmentRow({
  assignment,
}: {
  assignment: AssignmentWithStatus;
}) {
  const skill = skillLabels[assignment.id] ?? "Foundation";

  return (
    <TableRow
      className={cn(
        assignment.status === "OVERDUE" &&
          "border-l-2 border-l-destructive bg-destructive/5 hover:bg-destructive/10",
      )}
    >
      <TableCell className="max-w-56 px-4 py-3.5 sm:max-w-none sm:px-6">
        <p className="whitespace-normal font-medium leading-5">
          {assignment.title}
        </p>
        <p className="mt-1 text-xs tabular-nums text-muted-foreground">
          {assignment.id} · {skill}
        </p>
      </TableCell>

      <TableCell className="px-2 py-3.5 text-muted-foreground">
        <time dateTime={assignment.deadline} className="tabular-nums">
          {dateTimeFormatter.format(new Date(assignment.deadline))}
        </time>
      </TableCell>

      <TableCell className="px-2 py-3.5 text-muted-foreground">
        {assignment.submittedAt ? (
          <time dateTime={assignment.submittedAt} className="tabular-nums">
            {dateTimeFormatter.format(new Date(assignment.submittedAt))}
          </time>
        ) : (
          <span aria-label="Chưa nộp bài" className="tabular-nums">
            —
          </span>
        )}
      </TableCell>

      <TableCell className="px-4 py-3.5 text-right sm:px-6">
        <StatusBadge status={assignment.status} isLate={assignment.isLate} />
      </TableCell>
    </TableRow>
  );
}
