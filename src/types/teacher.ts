export interface Schedule {
  id: string;
  title: string;
  start: string;
  end: string;
}

export interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
  schedule: Schedule[];
}
