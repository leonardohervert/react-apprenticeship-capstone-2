import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledInput = styled.input``;

const DateInput = ({ ...props }) => {
  return (
    <React.Fragment>
      <StyledInput type={"date"} {...props} />
    </React.Fragment>
  );
};

export default DateInput;
