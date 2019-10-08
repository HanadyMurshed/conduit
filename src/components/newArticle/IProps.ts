import { string } from "prop-types";

export interface IProps {
  title?: string;
  describetion?: string;
  body?: string;
  tag?: string;
  tags?: string[];
  errors?: string[];
  handleTitleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescribetionChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleBodyChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTagsChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePublishEvent?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleTagCnacelClick?: (title: string) => void;
}
