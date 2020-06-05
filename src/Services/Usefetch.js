import {useState,useEffect} from 'react';

const Usefetch = url =>{
    const [data,setdata]= useState([]);
    const [error,seterror] = useState(null);
    useEffect(()=>{
        const Fetch = async () =>{
            try{
                let res = await fetch(url);
                let datos = await res.json();
                setdata(datos)

            }
            catch(e){
                seterror(e)
            }
        }
        Fetch()
    },[url])
    return {data,error}
}
export default Usefetch