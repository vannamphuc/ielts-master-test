import type { AssignmentWithStatus } from "@/types/assignment";
import { AssignmentCard } from "./AssignmentCard";
import { AssignmentRow } from "./AssignmentRow";
import { EmptyState } from "./EmptyState";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function AssignmentList({
  assignments,
}: {
  assignments: AssignmentWithStatus[];
}) {
  const pendingCount = assignments.filter(
    (assignment) => assignment.status === "PENDING",
  ).length;
  const overdueCount = assignments.filter(
    (assignment) => assignment.status === "OVERDUE",
  ).length;
  const submittedCount = assignments.filter(
    (assignment) =>
      assignment.status === "SUBMITTED" ||
      assignment.status === "SUBMITTED_LATE",
  ).length;

  const submittedPercent =
    assignments.length === 0
      ? 0
      : Math.round((submittedCount / assignments.length) * 100);

  const summaryItems = [
    { label: "Tổng bài tập", value: assignments.length },
    { label: "Còn hạn", value: pendingCount },
    { label: "Quá hạn", value: overdueCount },
    { label: "Đã nộp", value: submittedCount },
  ];

  return (
    <section
      aria-labelledby="assignments-heading"
      className="flex flex-col gap-5 sm:gap-6"
    >
      <Card>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {summaryItems.map((item) => (
              <div key={item.label}>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="mt-1 font-heading text-2xl font-semibold tabular-nums">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between gap-3 text-xs">
              <p className="text-muted-foreground">Tiến độ nộp bài</p>
              <p className="font-semibold tabular-nums">
                {submittedCount}/{assignments.length} · {submittedPercent}%
              </p>
            </div>
            <div
              role="progressbar"
              aria-label="Tiến độ nộp bài"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={submittedPercent}
              className="mt-2 h-2 overflow-hidden rounded-full bg-muted"
            >
              <div
                className="h-full rounded-full bg-success transition-[width]"
                style={{ width: `${submittedPercent}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {assignments.length === 0 ? (
        <Card className="gap-0 py-0">
          <div className="p-6">
            <EmptyState description="Khi có bài tập mới, chúng sẽ xuất hiện tại đây." />
          </div>
        </Card>
      ) : (
        <>
          <div className="flex flex-col gap-3 sm:hidden">
            {assignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>

          <Card className="hidden gap-0 py-0 sm:block">
            <div className="flex items-center justify-between gap-3 px-6 py-3">
              <h2 id="assignments-heading" className="text-sm font-semibold">
                Danh sách bài tập
              </h2>
              <p className="text-xs tabular-nums text-muted-foreground">
                {assignments.length} bài
              </p>
            </div>

            <Separator />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6">Bài tập</TableHead>
                  <TableHead className="px-2">Hạn nộp</TableHead>
                  <TableHead className="px-2">Đã nộp lúc</TableHead>
                  <TableHead className="px-6 text-right">Trạng thái</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignments.map((assignment) => (
                  <AssignmentRow
                    key={assignment.id}
                    assignment={assignment}
                  />
                ))}
              </TableBody>
            </Table>
          </Card>
        </>
      )}
    </section>
  );
}
