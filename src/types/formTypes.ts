export interface FormData {
  fullName: string;
  company: string;
  email: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  message?: string;
}
