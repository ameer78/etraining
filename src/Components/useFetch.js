import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [fetchedArr, setFetchedArr] = useState([]);
  const fetchData = async () => {
    const response = await fetch(url);
    const arrRecords = await response.json();
    setFetchedArr(arrRecords);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return fetchedArr;
};
export default useFetch;
