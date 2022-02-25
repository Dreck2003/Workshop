import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import {getUsers} from '../redux/actions/index';
import {State} from '../redux/rootReducer/reducer';

function App():JSX.Element {
    const dispatch = useDispatch();
    const fetchUser =bindActionCreators(getUsers,dispatch);
    const state=useSelector((state:State)=>state.users);
    console.log('El estado es: ',state);

    useEffect(()=>{

        // fetchUser();
        // console.log('El estado es: de spues de useeffect', state)
    },[])
    return(
        <div>
            <button onClick={()=>fetchUser()}>
                TRAER LOS USUARIOS
            </button>
            {state && state.map(user=>{
                return (
                    <div key={user.id}>
                            {user.name}
                    </div>
                )
            })}
        </div>
    )

}
export default App;