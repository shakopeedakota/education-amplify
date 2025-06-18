export interface Child {
  id: number;
  parentId: number;
  firstName: string;
  lastName: string;
  birthdate: Date;
  email?: string | null;
  phone?: string | null;
  currentSchool: string;
  grade: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}