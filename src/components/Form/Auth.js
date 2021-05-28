import {useState} from 'react';
import shortid from 'shortid'
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import ErrorDiff from '../Error/ErrorDiff';
import ErrorEmpty from '../Error/ErrorEmpty';

import './Auth.css'

const Auth = ({error, setError, errorDiff, setErrorDiff}) => {

  //States
  const [valuesForm, setValuesForm] = useState({
    email: '',
    password: ''
  });

  //Destructuring
  const {email, password} = valuesForm;

  //Asignar los datos del form al state
  const handleDatos = e => {
    setValuesForm({
      ...valuesForm,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    //Validación
    if(email.trim() === '' || password.trim() === ''){
      setError(true);
      return;
    }else if(email !== 'challenge@alkemy.org' || password !== 'react'){
      setErrorDiff(true);
      return;
    }

    //Si pasa la Validación
    setError(false);
    setErrorDiff(false);

    let setLocalStorage = value => {
      try {
        setValuesForm(value);
        window.localStorage.setItem('id', value)
      }catch (err){
        console.log(err);
      }
    }
    
    setLocalStorage(shortid.generate());

    setValuesForm({
      email: '',
      password: ''      
    })

    window.location.reload(true);

  }


  return ( 
    <Container className='container pt-5 pb-5 pl-0 pr-0 text-center d-flex justify-content-center'>
      <Row>
        <Col>
        {error 
          ? <ErrorEmpty titleError='Ops! Parece que hubo un problema' messageError='Uno o mas campos están vacios'/>
          : null
        }
        {errorDiff
          ? <ErrorDiff titleError='Ops! Parece que hubo un problema' messageError='Su usuario o contraseña no son válidos'/>
          : null
        }
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Ingrese su email</Form.Label>
              <Form.Control 
                type='email' 
                placeholder='challenge@alkemy.org' 
                name='email'
                value={email}
                onChange={handleDatos}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ingrese su contraseña</Form.Label>
              <Form.Control 
                type='password' 
                placeholder='*****' 
                name='password'
                value={password}
                onChange={handleDatos}
              />
            </Form.Group>
            <Button variant='success' size='lg' type='submit'>Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
   );
}
 
export default Auth;