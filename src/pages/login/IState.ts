export interface IState {
  toSignInUp: boolean;
  errors: string[];
  email: string;
  password: string;
  popperOpen?: boolean;
  popperContent?: string;
}
