import React from "react";
import styled from "styled-components";
import ImageCard from "../../components/ImageCard";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = () => {
  return (
    <StyledContent>
      <ImageCard />
    </StyledContent>
  );
};

export default Main;
