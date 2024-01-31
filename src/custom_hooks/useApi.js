import { useState, useEffect } from "react";
import axios from "axios";

// Inside the useApi hook

export function usePost(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [requestBody, setRequestBody] = useState(null);
  console.log("url : ", url);

  useEffect(() => {
    console.log(requestBody);
    async function fetchData() {
      try {
        const postResponse = await axios.post(url, requestBody);
        setData(postResponse.data);
      } catch (error) {
        setError(error);
      }
    }
    if (requestBody !== null) {
      fetchData();
    }
  }, [url, requestBody]);

  return {
    data,
    error,
    setNewRequestBody: (newRequestBody) => {
      setRequestBody(newRequestBody);
    },
  };
}

export function useGet(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}
