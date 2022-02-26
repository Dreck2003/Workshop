import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createUser} from '../redux/actions/index';


interface Inputs{
    name:string,
    lastName:string

}

 const Formulario=():JSX.Element=>{

    const [inputs,setInputs]=useState<Inputs>({
        name:'',
        lastName:''
    })
    const dispatch=useDispatch();

    const handleInput = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setInputs({
            ...inputs,
            [event.target.name]:event.target.value,
        })
    }

    const handleSubmit=(inputs:Inputs)=>{

        if(inputs.name && inputs.lastName){
            console.log(inputs.name,inputs.lastName)
            dispatch(createUser(inputs.name,inputs.lastName));

        }else{
            alert('Espacios vacios!')
        }

    }
    return(
        <Form >
            <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control name='name' type='text' placeholder='Enter your name...'  onChange={handleInput}/>
            </Form.Group>
            <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>Apellido:</Form.Label>
                <Form.Control name='lastName' type='text' placeholder='Enter your lastName...' onChange={handleInput}/>
            </Form.Group>
            <Button variant='primary' type='submit' className='btn btn-success' onClick={(e)=>{
                e.preventDefault();
                handleSubmit(inputs);
            }}>
                Enviar
            </Button>
        </Form>
    )
}
export default Formulario;