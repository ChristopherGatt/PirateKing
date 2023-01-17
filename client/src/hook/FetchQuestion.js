// fFetch Question hook to fetch api data and set value to store

import { useEffect } from 'react'

export const useFetchQuestion = () => {
  // const [getData, setGetData] = useState({
  //   Loading: false,
  //   apiData: [],
  //   serverError
  // });
  //   useEffect(()=> {
  //     setGetData(prev => ({...prev, Loading: true}));
  //     // async function fetch backend data
  //     (async () => {
  //       try {
  //         let question = await data;
  //         if(question.length > 0){
  //           setGetData(prev => ({...prev, Loading: false}));
  //           setGetData(prev => ({...prev, apiData: question}));
  //           //Dispatch an Action
  //         }
  //       } catch (error) {
  //         setGetData(prev => ({...prev, Loading: false}));
  //         setGetData(prev => ({...prev, serverError: error}));
  //       }
  //   });
  // })
}
