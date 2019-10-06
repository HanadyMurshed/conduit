export interface IState {
  username: string;
  bio: string;
  url: string;
  email: string;
  password: string;
  handleURLChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUsernameChange?: (e: React.ChangeEvent<{}>) => void;
  handleBioChange?: (e: React.ChangeEvent<{}>) => void;
  handleEmailChange?: (e: React.ChangeEvent<{}>) => void;
  handlePasswordChange?: (e: React.ChangeEvent<{}>) => void;
  handleOnClickUpdate?: () => void;
  handleOnClickLogOut?: () => void;
}
