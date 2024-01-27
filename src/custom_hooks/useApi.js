import { useState, useEffect } from 'react';
import axios from 'axios';

// Inside the useApi hook

export default function useApi(url, type) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [requestBody, setRequestBody] = useState(null);

    useEffect(() => {
        console.log(requestBody);
        async function fetchData() {
            try {
                switch (type) {
                    case 'get':
                        const getResponse = await axios.get(url);
                        setData(getResponse.data);
                        break;
                    case 'post':
                        const postResponse = await axios.post(url, requestBody);
                        setData(postResponse.data);
                        break;
                    default:
                        // Handle other types or throw an error
                        break;
                }
            } catch (error) {
                setError(error);
            }
        }
        if (requestBody !== null) {
            fetchData();
        }

    }, [url, type, requestBody]);

    return {
        data,
        error,
        setNewRequestBody: (newRequestBody) => {
            setRequestBody(newRequestBody);
        },
    };
}
 