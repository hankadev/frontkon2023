type User = {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
};

export type UserReducerState = {
  user: User | null;
  loggedIn: boolean;
};
