import { IUser } from "../../types/conduit.types";

export interface IProps {
  classes: any;
  handleUpdate: () => void;
  user?: Pick<IUser, "username" | "bio" | "image" | "email">;
}
