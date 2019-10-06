export interface IProps {
  url?: string;
  userName?: string;
  bio?: string;
  email?: string;
  password?: string;
  image?: string;
  handleURLChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUsernameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBioChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClickUpdate?: () => void;
  handleOnClickLogOut?: () => void;
}
