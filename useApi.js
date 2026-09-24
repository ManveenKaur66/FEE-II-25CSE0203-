//useApi is custom hook...
import { useEffect,useState } from "react";
function useApi(url){
    const [data,setData]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw new Error("SOMETHING WENT WRONG!!");
            }
            if(res.status==404){
                throw new Error("PAGE NOT FOUND!!");
            }
            if(res.status==408){
                throw new Error("SERVER WENT DOWN!!");
            }
            console.log(res);
            return res.json()})
        .then((data)=>{
            setData(data);
        })
        .catch((error)=>{
            setError(error.message)
        })
        .finally(()=>{
            setLoading(false);
        })
    },[url])
    
    return {data,loading,error};
}
export default useApi;