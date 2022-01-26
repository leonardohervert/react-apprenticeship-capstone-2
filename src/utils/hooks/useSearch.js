import { useState } from "react";
import _ from "lodash";
export const useSearch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const DoSearch = async (date) => {
    setError("");
    setData(null);
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=d1wuMh2uafdjSA32WF5U0L035aD07eEfmjewchN5&date=${date}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!_.isEmpty(data.error))
          setError("There was an error, please try again.");
        if ([400, 404].includes(data.code)) setError(data.msg);
        else setData(data);
      })
      .catch((error) => {
        setError(error.msg);
      });
  };

  return { data, error, DoSearch };
};
