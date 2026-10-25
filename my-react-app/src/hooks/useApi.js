//useApi is custom hook...
//Normally, if you want data from an API, you have to write: fetch(url) and then handle data, loading, errors
//useApi puts all of that logic into one reusable function.
import { useEffect,useState } from "react"; //importing 2 react hooks: useEffect and useState
//useEffect is used to store API data,loading and error
//useState is used to call API.
function useApi(url){
    // 3 possible states that can trigger using API hook..
    const [data,setData]=useState(null);  //This stores the data we get from API.Initially the data is null.
    const[loading,setLoading]=useState(true);  //It tells if API is still loading,intially the value is true, and when the loading process is done, the value is turned to false;
    const[error,setError]=useState(null); // It stores error if something goes wrong..
    //useEffect is used because we want to call the API when the component loads.
    useEffect(()=>{
        fetch(url) //fetch the data
        .then(res=>{  //The response is recieved here.
            if(!res.ok){
                throw new Error("SOMETHING WENT WRONG!!");
            }
            if(res.status==404){
                throw new Error("PAGE NOT FOUND!!");
            }
            if(res.status==408){  //Server/request problem
                throw new Error("SERVER WENT DOWN!!");
            }
            console.log(res);
            return res.json()})   //Convert the response into usable JavaScript data.
        .then((data)=>{
            setData(data);   //here value is updated..
        })
        .catch((error)=>{          //here error is handled..
            setError(error.message)   //error message is stored here
        })
        .finally(()=>{
            setLoading(false);
        })
    },[url]) //url is stored in dependency array,Because I want the API call to run again whenever the URL changes.
    
    return {data,loading,error}; //data is returned with loading state and error state
}
export default useApi;