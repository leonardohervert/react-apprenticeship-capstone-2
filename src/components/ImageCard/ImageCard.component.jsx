import React, { useEffect, useState } from "react";
import Image from "../Image";
import styled from "styled-components";
import DateInput from "../DateInput";
import { useSearch } from "../../utils/hooks/useSearch";
import { format } from "date-fns";
import _ from "lodash";
const ContentDiv = styled.div`
  text-align: center;
`;
const StyledLabel = styled.p`
  text-align: center;
`;

const StyledFrame = styled.iframe`
  width: 100%;
`;
const ImageCard = () => {
  const { data, error, DoSearch } = useSearch();
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));

  useEffect(() => {
    DoSearch(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <ContentDiv>
        {<p>Nasa API!</p>}
        <DateInput
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            DoSearch(e.target.value);
          }}
        />
        {!_.isEmpty(error) && <p>{error}</p>}
        {/* <div style={{}}>
          <img src={logo} className="Loading-logo" alt="logo" />
        </div> */}
      </ContentDiv>
      {data && (
        <React.Fragment>
          <StyledLabel>{data?.title}</StyledLabel>
          {data?.media_type === "video" && (
            <StyledFrame
              height="450"
              allowFullScreen
              frameBorder="0"
              title={data?.title}
              src={data?.url}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          )}
          {data?.media_type === "image" && <Image src={data?.url} alt={``} />}
          <StyledLabel>{data?.explanation}</StyledLabel>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ImageCard;
