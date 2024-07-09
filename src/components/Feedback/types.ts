import { ButtonProps } from "components/Button/types";

export interface FeedbackProps {
  onLike: () => void;
  likesCount: number;
  likeImgSrc: string;
  onDislike: () => void;
  dislikesCount: number;
  disLikeImpSrc: string;
  onReset: () => void;
}
