import Button from "components/Button/Button";

import { FeedbackProps } from "./types";
import "./styles.css";

function Feedback(props: FeedbackProps) {
  return (
    <div className="feedback-component-wrapper">
      <div className="feedback-fields-wrapper">
        <div className="feedback-field">
          <Button
            name={props.likeButtonProps.name}
            type={props.likeButtonProps.type}
            onClick={props.likeButtonProps.onClick}
            imgSrc={props.likeButtonProps.imgSrc}
          />
          <div className="output-field">
            <p>{props.likesCount}</p>
          </div>
        </div>
        <div className="feedback-field">
          <Button
            name={props.disLikeButtonProps.name}
            type={props.disLikeButtonProps.type}
            onClick={props.disLikeButtonProps.onClick}
            imgSrc={props.disLikeButtonProps.imgSrc}
          />
          <div className="output-field">
            <p>{props.dislikesCount}</p>
          </div>
        </div>
      </div>
      <Button
        name={props.resetResultButtonProps.name}
        type={props.resetResultButtonProps.type}
        onClick={props.resetResultButtonProps.onClick}
      />
    </div>
  );
}

export default Feedback;
