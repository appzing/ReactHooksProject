
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};


import { useState, useEffect} from 'react';
import axios from 'axios';

export default function useDataFetching(initialUrl, initialData) {
    const [url, setUrl] = useState('https://google.com/');
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData,
    });

  useEffect(() => {
    const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios({url, responseType: 'json'});

         dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
         dispatch({ type: 'FETCH_FAILURE' });
      }

    };

    fetchData();
}, [url]);

  return [{ data, isLoading, isError }, setUrl];
}
