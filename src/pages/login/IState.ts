export interface IState {
  toHome: boolean;
  toSignInUp: boolean;
  errors: string[];
  email: string;
  password: string;
  popperOpen?: boolean;
  popperContent?: string;
}
