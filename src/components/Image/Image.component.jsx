import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  z-index: -1;
  width: 100%;
  height: auto;
`;

const Image = ({ ...props }) => {
  const { src, alt } = props;
  return (
    <React.Fragment>
      <StyledImage src={src} alt={alt} resizeMode="contain" />
    </React.Fragment>
  );
};

export default Image;
