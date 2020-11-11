import { useState, useEffect } from "react";
import { getApi } from "./requests";

const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    getApi(url, setData);
  }, [url]);

  const updateData = () => {
    getApi(url, setData);
  };

  return [data, updateData];
};

export default useRequestData;