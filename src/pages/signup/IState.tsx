import { IState as State } from "../login/IState";

export interface IState extends State {
  username: string;
}
