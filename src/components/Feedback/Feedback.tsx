import Button from "components/Button/Button";

import { FeedbackProps } from "./types";
import "./styles.css";

function Feedback({
  likesCount,
  onLike,
  likeImgSrc,
  dislikesCount,
  disLikeImpSrc,
  onDislike,

  onReset,
}: FeedbackProps) {
  return (
    <div className="feedback-component-wrapper">
      <div className="feedback-fields-wrapper">
        <div className="feedback-field">
          <Button name={""} onClick={onLike} imgSrc={likeImgSrc} />
          <div className="output-field">
            <p>{likesCount}</p>
          </div>
        </div>
        <div className="feedback-field">
          <Button name={""} onClick={onDislike} imgSrc={disLikeImpSrc} />
          <div className="output-field">
            <p>{dislikesCount}</p>
          </div>
        </div>
      </div>
      <Button name={"Reset results"} onClick={onReset} />
    </div>
  );
}

export default Feedback;
