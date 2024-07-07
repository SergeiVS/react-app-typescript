import { useState } from "react";

import SimpsonsCard from "components/SimpsonsCard/SimpsonsCard";
import LoginForm from "components/LoginForm/LoginForm";
import Feedback from "components/Feedback/Feedback";

import { FeedbackProps } from "components/Feedback/types";
import { testSimpsonsCardProps } from "./testPropsEntitys";
import { loginFormProps } from "./testPropsEntitys";
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

  const feedbackProps: FeedbackProps = {
    likeButtonProps: {
      name: undefined,
      imgSrc: "https://pngimg.com/d/like_PNG49.png",
      onClick: onLike,
    },

    likesCount: likesCount,

    disLikeButtonProps: {
      name: undefined,
      imgSrc: "https://cdn-icons-png.flaticon.com/512/126/126504.png",
      onClick: onDislike,
    },

    dislikesCount: dislikesCount,

    resetResultButtonProps: {
      name: "Reset results",
      onClick: onReset,
    },
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
      <LoginForm
        emailImputProps={loginFormProps.emailImputProps}
        passwordInputProps={loginFormProps.passwordInputProps}
        submitButtonProps={loginFormProps.submitButtonProps}
      />
      <Feedback
        likeButtonProps={feedbackProps.likeButtonProps}
        likesCount={feedbackProps.likesCount}
        disLikeButtonProps={feedbackProps.disLikeButtonProps}
        dislikesCount={feedbackProps.dislikesCount}
        resetResultButtonProps={feedbackProps.resetResultButtonProps}
      />
    </div>
  );
}
export default Homework07;
