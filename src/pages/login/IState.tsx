import { ReferenceObject } from "popper.js";
export interface IState {
  errors: string[];
  email: string;
  emailAnchor?: ReferenceObject | null;
  password: string;
  passwordAnchor?: string;
  popperAchorE?: ReferenceObject | null;
  popperOpen?: boolean;
  popperContent?: string;
}
