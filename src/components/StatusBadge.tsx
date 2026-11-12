import type { AssignmentStatus } from "@/types/assignment";
import { Badge } from "@/components/ui/badge";
import { Check, CircleDashed, Clock3, TriangleAlert } from "lucide-react";

const statusAppearance = {
  PENDING: {
    label: "Chưa nộp",
    icon: CircleDashed,
    className: "border-primary/30 bg-primary/10 text-primary",
  },
  OVERDUE: {
    label: "Quá hạn",
    icon: TriangleAlert,
    className: "border-destructive/30 bg-destructive/10 text-destructive",
  },
  SUBMITTED: {
    label: "Đã nộp",
    icon: Check,
    className: "border-success/30 bg-success/10 text-success",
  },
  SUBMITTED_LATE: {
    label: "Đã nộp",
    icon: Check,
    className: "border-success/30 bg-success/10 text-success",
  },
} satisfies Record<
  AssignmentStatus,
  { label: string; icon: typeof Check; className: string }
>;

export function StatusBadge({
  status,
  isLate,
  align = "end",
}: {
  status: AssignmentStatus;
  isLate: boolean;
  align?: "start" | "end";
}) {
  const appearance = statusAppearance[status];
  const Icon = appearance.icon;

  return (
    <div
      role="status"
      aria-label={isLate ? `${appearance.label}, nộp trễ` : appearance.label}
      className={`flex flex-wrap items-center gap-1.5 ${
        align === "end" ? "justify-end" : "justify-start"
      }`}
    >
      <Badge variant="outline" className={appearance.className}>
        <Icon aria-hidden="true" />
        {appearance.label}
      </Badge>
      {isLate && (
        <Badge
          variant="outline"
          className="border-destructive/30 bg-destructive/10 text-destructive"
        >
          <Clock3 aria-hidden="true" />
          Nộp trễ
        </Badge>
      )}
    </div>
  );
}
