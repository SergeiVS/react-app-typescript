import styled from "@emotion/styled";

export const FeedbackComponentWrapper= styled("div") `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  min-width: 400px;
  height: fit-content
  ;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(26, 35, 53);
  color: white;
`

export const FeedbackFieldsWrapper=styled("div") `
  display: flex;
  width: 100%;
  gap: 20px;
`

export const FeedbackField= styled("div") `
  display: flex;
  width: 100%;
  gap: 20px;
`

export const OutputField =styled ("div")`
  display: flex;
  height: 100%;
  width: 100px;
  background-color: white;
  font-size: 40px;
  color: black;
  justify-content: center;
  align-items: center;
`
