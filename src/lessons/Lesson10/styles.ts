import styled from "@emotion/styled";

export const Lesson_10Div = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f1f0ed;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 26px;
`;

export const Lesson_10Header = styled.div`
  display: flex;
  background-color: white;
  padding-left: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: fit-content;
  align-items: center;
`;

export const Lesson_10Cards = styled.div`
  width: 100%;
  min-height: 500px;
  max-height: fit-content;
  justify-content: center;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: 40px 80px 80px 80px;
  gap: 30px;
  background-image: url("https://images.pexels.com/photos/1122865/pexels-photo-1122865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
`;

export const TitelDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled("p")`
  font-size: 26px;
`;

export const StyledError = styled.div`
  height: 70px;
  background-color: #fce4e4;
  border: 1px solid #fcc2c3;
  float: left;
  padding: 20px 30px;
  color: red;
`;
