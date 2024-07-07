import { ButtonProps } from "components/Button/types";

export interface FeedbackProps {
  likeButtonProps: ButtonProps;
  likesCount: number;
  disLikeButtonProps: ButtonProps;
  dislikesCount: number;
  resetResultButtonProps: ButtonProps;
}
