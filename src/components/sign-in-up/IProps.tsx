import { ReferenceObject } from "popper.js";
export interface IProps {
  errors?: string[];
  email?: string;
  password?: string;
  popperAchorE?: ReferenceObject | null;
  popperOpen?: boolean;
  popperContent?: string;
  onClick?: (event: any) => void;
  handleEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocusInput?: () => void;
  handleNoAccount: () => void;
}
