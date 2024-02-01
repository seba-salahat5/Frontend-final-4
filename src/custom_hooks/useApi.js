import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../context/userProvider";

let session_token = localStorage.getItem("session_token");

export function usePost(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [requestBody, setRequestBody] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const postResponse = session_token
          ? await axios.post(url, requestBody, {
              headers: { Authorization: `Bearer ${session_token}` },
            })
          : await axios.post(url, requestBody);
        setData(postResponse.data);
      } catch (error) {
        console.log(error);
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
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = session_token
          ? await axios.get(url, {
              headers: { Authorization: `Bearer ${session_token}` },
            })
          : await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
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
