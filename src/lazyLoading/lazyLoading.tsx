import { Suspense, lazy } from "react";
//import HOC1 from "../HOCs/OriginalComParam";
type ImportComponentFunction = () => Promise<{ default: React.ComponentType<any> }>;
const FetchTodos = lazy(()=> delayForDemo(()=>(import('./CustomHookCom'))));

const LazyLoading:React.FC = () => {
  return (
    <>
      <h1>Lazy Load with</h1>
     
      <Suspense fallback={<div>todos data is loading, please wait...</div>}>
        <FetchTodos />        
      </Suspense>
    </>
  );
};
function delayForDemo(importComponent:ImportComponentFunction): Promise<{ default: React.ComponentType<any> }> {
    return new Promise((resolve, )=> {
      setTimeout(resolve, 3000);   
    }).then(() => importComponent());
  }

export default LazyLoading;
