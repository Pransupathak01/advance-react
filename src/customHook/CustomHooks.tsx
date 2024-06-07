import React, { useState, useEffect } from "react";
import axios from 'axios';

interface customhookProps {
  initializer: number;
  componentName: string;
}
const useCustomHooks = ({ initializer, componentName }: customhookProps) => {
  const [count, setCount] = useState<number>(initializer);

  const handleButtonClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(
      "The button of the" + componentName + "is clicked " + count + " times."
    );
  }, [count, componentName]);

  return handleButtonClick;
};



const useFetch = (url:string) =>{
  const [data, setData] =useState<any>(null);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.get(url);
        setData(response.data);
      }catch(error: any){
        console.log('Error fetching data:', error);
        throw error;
        
      }
    }
    fetchData()
  },[url])
return data;
}
//export default useCustomHooks;


const FirstComponent:React.FC = () =>{

    const handleClick = useCustomHooks({ initializer: 0, componentName: 'FirstComponent' })
    return(
        <div>
        <h1> This is the First Component</h1>
        <button onClick={handleClick}> 
              Click here!
        </button>
    </div>
    )
}

const SecondComponent:React.FC =() =>{
    const handleClick = useCustomHooks({ initializer: 0, componentName: 'SecondComponent' })
    return(
        <div>
        <h1> This is the First Component</h1>
        <button onClick={handleClick}> 
              Click here!
        </button>
    </div>
    )

}



export {FirstComponent, SecondComponent, useFetch};