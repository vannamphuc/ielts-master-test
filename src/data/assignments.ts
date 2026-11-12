import type { Assignment } from "../types/assignment";

export const mockAssignments: Assignment[] = [
  {
    id: "A01",
    studentId: "S01",
    title: "Foundation U1 – Reading",
    deadline: "2026-11-13T23:59:00+07:00",
    submittedAt: null,
  },
  {
    id: "A02",
    studentId: "S01",
    title: "Foundation U2 – Listening",
    deadline: "2026-11-09T23:59:00+07:00",
    submittedAt: null,
  },
  {
    id: "A03",
    studentId: "S01",
    title: "Foundation U3 – Writing",
    deadline: "2026-11-10T23:59:00+07:00",
    submittedAt: "2026-11-10T20:00:00+07:00",
  },
  {
    id: "A04",
    studentId: "S01",
    title: "Foundation U4 – Speaking",
    deadline: "2026-11-08T23:59:00+07:00",
    submittedAt: "2026-11-10T12:00:00+07:00",
  },
  {
    id: "B01",
    studentId: "S02",
    title: "Foundation U1 – Reading",
    deadline: "2026-11-13T23:59:00+07:00",
    submittedAt: null,
  },
];

export const MOCK_NOW = "2026-11-11T09:00:00+07:00";

export const MOCK_STUDENT_ID = "S01";
