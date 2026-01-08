export interface IUserForm {
  firstName: string;
  lastName: string;
  email: string;
  skills: string[];
}

export interface IUserCreateData extends IUserForm {
  createdAt: string;
}
