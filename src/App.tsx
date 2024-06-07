
import './App.css'
import HOC1 from './HOCs/OriginalComParam';
import HOC2 from './HOCs/RenderProps';
import { FirstComponent,SecondComponent } from './customHook/CustomHooks';
import Navbar from './navbar/navbar';
import LazyLoading from './lazyLoading/lazyLoading';
import { decrement, increment, incrementByAmount } from './redux/counter/counterSlice';
import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';


function App() {
const count = useSelector((state:RootState) => state.counter.value)
const dispatch = useDispatch()
  return (
    <>
    <HOC1/>
    <HOC2/>
    <h1 className='text-3xl font-bold text-red-500 p-4'>Custom Hooks</h1>
    <FirstComponent/>
    <SecondComponent/>
    <Navbar/>
    <div className='p-8'>
    <div>
      <button onClick={()=>dispatch(decrement())}>-</button>
     currently count is {count}
     <button onClick={()=>dispatch(increment())}>+</button>
     
    </div>
    <div>
      increment count by 6 
      <button onClick={()=>dispatch(incrementByAmount(6))}>+</button>
    </div>
    </div>
    <LazyLoading/>

      
    </>
  )
}

export default App
