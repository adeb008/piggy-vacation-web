export interface ActivityItem {
  id: string;
  title: string;
  type: string;
  startTime?: string | null;
  endTime?: string | null;
  location?: string | null;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  cost?: number | null;
  notes?: string | null;
  sortOrder: number;
}

export interface TripDayItem {
  id: string;
  dayIndex: number;
  date: string;
  title?: string | null;
  activities: ActivityItem[];
}

export interface BudgetItem {
  id: string;
  category: string;
  plannedAmt?: number | null;
  note?: string | null;
}

export interface MemberItem {
  id: string;
  nickname?: string | null;
  avatar?: string | null;
  role: string;
  isConfirmed: boolean;
}

export interface ApprovalItem {
  id: string;
  displayName: string;
  approvedAt: string;
}

export interface ShareDetail {
  shareToken: string;
  status: string;
  expiresAt?: string | null;
  trip: {
    id: string;
    title: string;
    destination?: string | null;
    coverImage?: string | null;
    startDate: string;
    endDate: string;
    status: string;
    totalBudget?: number | null;
    notes?: string | null;
    days: TripDayItem[];
    budgets: BudgetItem[];
    members: MemberItem[];
  };
  approvalSummary: {
    count: number;
    approvals: ApprovalItem[];
  };
}

export interface ConfirmResponse {
  success: boolean;
  alreadyConfirmed: boolean;
  message: string;
  approval: ApprovalItem;
}

export interface ApiEnvelope<T> {
  code: number;
  message: string;
  data: T;
}
