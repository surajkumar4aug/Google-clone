import  {useState,useEffect} from "react";
import API_KEY from "./key";
const CONTEXT_KEY="657d3d0fe1e2eec87";

const Googlesearch= (term) =>{
  const [data,setData] = useState(null);
  useEffect(() => {
const fetchData = async() => {
    fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(response => response.json())
        .then(result => {
          setData(result)
        })
      }
fetchData();
  }, [term])  
  return { data }
};

export default Googlesearch;
