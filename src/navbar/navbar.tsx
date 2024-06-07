import type { RootState } from "../redux/store";
import { useSelector} from 'react-redux'
const Navbar: React.FC  = () =>{
    const count = useSelector ((state: RootState)=> state.counter.value)
    return(
        <div className="text-3xl font-bold underline">
            <h2 >I am a navbar and counter is {count}</h2>
        </div>
    )
}
export default Navbar;