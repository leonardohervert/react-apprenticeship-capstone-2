import { useState, useEffect } from "react";
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
        if (data.code === 400) setError(data.msg);
        else setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("catch");
        setError(error.msg);
      });
  };

  return { data, error, DoSearch };
};
