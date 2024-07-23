import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

export const StyledModalWrapper = styled(Dialog)`
  & .MuiPaper-root {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: large;
    width: fit-content;
    height: fit-content;
    padding: 40px;
  }
`;
