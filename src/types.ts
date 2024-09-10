export type UserMainData = {
  username: string;
  phone: string;
  website: string;
};

export type User = UserMainData & {
  id: number;
  name?: string;
};

export const enum TabTypes {
  FORM,
  USERS,
}
