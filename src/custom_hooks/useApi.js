import { useState, useEffect } from 'react';
import axios from 'axios';

export function useApi(url, type, requestBody) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function loadData() {
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
            } finally {
                // Additional cleanup or actions can be performed here
            }
        }
        loadData();
    }, [url, type, requestBody]);
    return {
        data,
        error,
    };
}