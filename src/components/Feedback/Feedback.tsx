import Button from "components/Button/Button";

import { FeedbackProps } from "./types";
import { FeedbackComponentWrapper } from "./styles";
import { FeedbackFieldsWrapper } from "./styles";
import { FeedbackField } from "./styles";
import { OutputField } from "./styles";

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
    <FeedbackComponentWrapper>
      <FeedbackFieldsWrapper>
        <FeedbackField>
          <Button name={""} onClick={onLike} imgSrc={likeImgSrc} />
          <OutputField>{likesCount}</OutputField>
        </FeedbackField>
        <FeedbackField>
          <Button name={""} onClick={onDislike} imgSrc={disLikeImpSrc} />
          <OutputField>{dislikesCount}</OutputField>
        </FeedbackField>
      </FeedbackFieldsWrapper>
      <Button name={"Reset results"} onClick={onReset} />
    </FeedbackComponentWrapper>
  );
}

export default Feedback;
