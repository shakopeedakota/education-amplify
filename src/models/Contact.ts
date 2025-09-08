export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  enrolledCommunityMember?: boolean | null;
  email: string;
  phone: string;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
}