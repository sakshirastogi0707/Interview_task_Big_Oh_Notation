export interface FamilyInfo {
  id: number;
  parentNames: string;
  dob: string;
  relation: string;
}
export interface FormData {
  userId: string
  firstName: string;
  lastName: string;

  phoneNumber: string;
  email: string;
  address: string;
  familyInfo: FamilyInfo[];
}
