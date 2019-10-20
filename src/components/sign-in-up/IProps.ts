export interface SignInIProps {
  errors?: string[];
  email?: string;
  password?: string;
  popperOpen?: boolean;
  popperContent?: string;
  onClick?: (event: any) => void;
  handleEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocusInput?: () => void;
  handleNoAccount?: () => void;
}
export interface SignUpIProps extends SignInIProps {
  username?: string;
  handleUsernameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
