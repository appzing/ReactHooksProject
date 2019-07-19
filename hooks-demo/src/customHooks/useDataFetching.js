import { useState, useEffect} from 'react';
import axios from 'axios';

export default function useDataFetching() {
    const [data, setData] = useState({});
    const [url, setUrl] = useState('https://google.com/');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios({url, responseType: 'json'});

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
}, [url]);

  return [{ data, isLoading, isError }, setUrl];
}
