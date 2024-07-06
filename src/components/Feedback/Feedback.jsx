import "./styles.css";
import Like from "../../assets/Facebook_Thumb_icon.svg";
import Dislike from "../../assets/64px-Not_facebook_not_like_thumbs_down.png";

import { useState } from "react";
import Button from "../Button/Button";

function Feedback() {
  const [likesCount, setLikesCount] = useState(0);
  const onLike = () => {
    setLikesCount((prevValue) => prevValue + 1);
  };

  const [dislikesCount, setDislikesCount] = useState(0);
  const onDislike = () => {
    setDislikesCount((prevValue) => prevValue + 1);
  };

  const onReset = () => {
    setDislikesCount(0);
    setLikesCount(0);
  };

  return (
    <div className="feedback-component-wrapper">
      <div className="feedback-fields-wrapper">
        <div className="feedback-field">
          <Button type="button" onClick={onLike} imgSrc={Like} />
          <div className="output-field">
            <p>{likesCount}</p>
          </div>
        </div>
        <div className="feedback-field">
          <Button type="button" onClick={onDislike} imgSrc={Dislike} />
          <div className="output-field">
            <p>{dislikesCount}</p>
          </div>
        </div>
      </div>
      <Button name={"Reset Results"} type="button" onClick={onReset} />
    </div>
  );
}

export default Feedback;
