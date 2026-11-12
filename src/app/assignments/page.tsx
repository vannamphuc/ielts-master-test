import { MOCK_NOW } from "@/data/assignments";
import { getAssignmentsForCurrentStudent } from "@/services/assignment.service";
import { AssignmentList } from "@/components/AssignmentList";
import { dateTimeFormatter } from "@/lib/format";

export default function AssignmentsPage() {
  const assignments = getAssignmentsForCurrentStudent();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Foundation · Học viên S01
          </p>
          <h1 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Bài tập của tôi
          </h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Theo dõi hạn nộp và trạng thái 4 bài Foundation. Trạng thái được
            chấm theo mốc thời gian cố định, không dùng giờ hiện tại.
          </p>
        </div>

        <div className="rounded-4xl border bg-card px-3.5 py-2.5 shadow-sm">
          <div>
            <p className="text-xs text-muted-foreground">Mốc chấm bài</p>
            <time
              dateTime={MOCK_NOW}
              className="text-sm font-semibold tabular-nums"
            >
              {dateTimeFormatter.format(new Date(MOCK_NOW))}
            </time>
          </div>
        </div>
      </div>

      <AssignmentList assignments={assignments} />
    </main>
  );
}
