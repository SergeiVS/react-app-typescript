import { useState } from "react";
import { FormEvent } from "react";

import SimpsonsCard from "components/SimpsonsCard/SimpsonsCard";
import LoginForm from "components/LoginForm/LoginForm";
import Feedback from "components/Feedback/Feedback";

import { testSimpsonsCardProps } from "./testPropsEntitys";
import "./styles.css";

function Homework07() {
  const [likesCount, setLikesCount] = useState<number>(0);
  const onLike = (): void => {
    setLikesCount((prevValue: number): number => prevValue + 1);
  };

  const [dislikesCount, setDislikesCount] = useState<number>(0);
  const onDislike = (): void => {
    setDislikesCount((prevValue: number): number => prevValue + 1);
  };

  const onReset = (): void => {
    setDislikesCount(0);
    setLikesCount(0);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("button works");
  };

  return (
    <div className="homework-wrapper">
      <SimpsonsCard
        firstName={testSimpsonsCardProps.firstName}
        lastName={testSimpsonsCardProps.lastName}
        occupation={testSimpsonsCardProps.occupation}
        hobbies={testSimpsonsCardProps.hobbies}
        avatarUrl={testSimpsonsCardProps.avatarUrl}
      />
      <div className="components-wrapper">
        {/* //Это безусловный костыль надо через контрось элементов получать значения и выводить их */}
        <LoginForm />
        <Feedback
          likesCount={likesCount}
          onLike={onLike}
          likeImgSrc="https://pngimg.com/d/like_PNG49.png"
          dislikesCount={dislikesCount}
          onDislike={onDislike}
          disLikeImpSrc="https://cdn-icons-png.flaticon.com/512/126/126504.png"
          onReset={onReset}
        />
      </div>
    </div>
  );
}
export default Homework07;
