export interface Users {
  users: User[];
  isLoading: boolean;
}

export type User = {
  id: string;
  username: string;
  email: string;
  role: string;
  created: Date;
  access: string;
  imageUrl: string;
};
