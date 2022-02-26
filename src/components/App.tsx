import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as acciones from '../redux/actions/index';
import {State} from '../redux/rootReducer/reducer';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
//===========================================

import Formulario from './Formulario';

function App():JSX.Element {
    const dispatch = useDispatch();
    const {getUsers,deleteUser} = bindActionCreators(acciones,dispatch);
    const state=useSelector((state:State)=>state.users);
    console.log('El estado es: ',state);

    useEffect(()=>{

        // fetchUser();
        // console.log('El estado es: de spues de useeffect', state)
    },[])
    return(
        <Container className="d-flex flex-row justify-content-around w-100 align-items-center bd-highlight " style={{minHeight:'100vh'}} >
            <div>
                <Button onClick={()=>getUsers()} className='btn btn-success'>
                TRAER LOS USUARIOS
                </Button>

                <Table striped style={{marginTop:'20px'}}>
                    <tbody>
                        {state && state.map(user=>{
                         return (
                             <tr key={user.id} >
                                <td>
                                    {user.name}{` ${user.lastName}`}
                                    
                                </td>
                                <td>
                                    <button onClick={()=>deleteUser(user.id)} className='btn btn-success'>
                                        Borrar
                                    </button>
                                </td>
                             </tr>
                    
                        )
                      })}
                    </tbody>
                </Table>
            </div>
            <Formulario />

        </Container>
    )

}
export default App;