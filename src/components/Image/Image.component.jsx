import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  z-index: -1;
  width: 100%;
  height: auto;
`;

const Image = ({ ...props }) => {
  return (
    <React.Fragment>
      <StyledImage {...props} />
    </React.Fragment>
  );
};

export default Image;
