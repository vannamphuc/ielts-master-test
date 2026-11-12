import type { AssignmentWithStatus } from "@/types/assignment";
import { StatusBadge } from "./StatusBadge";
import { dateTimeFormatter } from "@/lib/format";
import { cn } from "@/lib/utils";

const skillLabels: Record<string, string> = {
  A01: "Reading",
  A02: "Listening",
  A03: "Writing",
  A04: "Speaking",
};

export function AssignmentCard({
  assignment,
}: {
  assignment: AssignmentWithStatus;
}) {
  const skill = skillLabels[assignment.id] ?? "Foundation";

  return (
    <article
      className={cn(
        "rounded-xl border bg-card p-4 shadow-sm",
        assignment.status === "OVERDUE" &&
          "border-l-2 border-l-destructive bg-destructive/5",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold leading-5">
            {assignment.title}
          </h2>
          <p className="mt-1 text-xs tabular-nums text-muted-foreground">
            {assignment.id} · {skill}
          </p>
        </div>
        <StatusBadge
          status={assignment.status}
          isLate={assignment.isLate}
          align="start"
        />
      </div>

      <dl className="mt-3 space-y-1.5 border-t border-dashed pt-3 text-sm">
        <div className="flex items-center justify-between gap-3">
          <dt className="text-xs text-muted-foreground">Hạn nộp</dt>
          <dd className="tabular-nums">
            <time dateTime={assignment.deadline}>
              {dateTimeFormatter.format(new Date(assignment.deadline))}
            </time>
          </dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-xs text-muted-foreground">Đã nộp lúc</dt>
          <dd className="tabular-nums text-muted-foreground">
            {assignment.submittedAt ? (
              <time dateTime={assignment.submittedAt}>
                {dateTimeFormatter.format(new Date(assignment.submittedAt))}
              </time>
            ) : (
              "—"
            )}
          </dd>
        </div>
      </dl>
    </article>
  );
}
