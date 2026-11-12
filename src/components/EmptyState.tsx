import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ClipboardList } from "lucide-react";

export function EmptyState({ description }: { description: string }) {
  return (
    <Empty className="border py-10">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ClipboardList aria-hidden="true" />
        </EmptyMedia>
        <EmptyTitle>Chưa có bài tập</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
