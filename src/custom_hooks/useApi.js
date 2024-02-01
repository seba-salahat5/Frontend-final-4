import { useState, useEffect } from "react";
import axios from "axios";

export function usePost(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [requestBody, setRequestBody] = useState(null);

  useEffect(() => {
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

export function useGet(url, session_token) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        /*         console.log("Request URL:", url);
        console.log("Authorization Header:", `Bearer ${session_token}`); */
        /*         axios.defaults.headers.common["Authorization"] =
          "Bearer " + session_token; */
          
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, session_token]);
  return {
    data,
    error,
    loading,
  };
}
