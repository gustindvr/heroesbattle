import { useState } from 'react';
import axios from 'axios';
import ErrorEmpty from '../Error/ErrorEmpty';
import ErrorDiff from '../Error/ErrorDiff';

import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';

const SelectHero = ({constructorTeam}) => {

  //States
  const [heroe, setHeroe] = useState([]);
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [errorDiff, setErrorDiff] = useState(false)

  //Llamada a Api. Se devuelven los resultados y se guardan en un State
  const callToApi = async e => {
    e.preventDefault();

    if(name === ''){
      setErrorDiff(false);
      setError(true);
      return;
    }

    const url = `https://superheroapi.com/api/4837270806345815/search/${name}`;

    const api = await axios.get(url)
                           .then(response => response.data)
                           .catch(error => console.log(error));
    

    if(api.response === 'error'){
      setError(false);
      setErrorDiff(true);
      return;
    }else{
      const {results} = api; 
      setHeroe(results);
    }
    
    setError(false);
    setErrorDiff(false);

  };

  const addHeroToTeam = hero => {
    constructorTeam(hero);
  }

  return ( 
    <Container fluid>
      <Row>
        <Col md={12} lg={12} className='d-flex justify-content-center text-center mt-5'>
          <Form onSubmit={callToApi}>
          {errorDiff ? <ErrorDiff titleError='Apa! Parece que hubo un error' messageError='No se encontraron resultados para esta búsqueda'/> : null}  
          {error ? <ErrorEmpty titleError='Apa! Parece que hubo un error' messageError='El campo de búsqueda está vacio' /> : null}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control 
                type="search" 
                placeholder="Enter Name Heroe" 
                value={name}
                onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <Button  
              type='submit'
              variant='success' 
            >Call to Action</Button> 
          </Form>
        </Col>
        <Col sm={12} md={12} lg={12} className='d-flex mt-5 row justify-content-center text-center'>
          {heroe.map(hero => 
          <Card style={{ width: '15rem' }} className='m-4 d-flex' key={hero.id}>
            <Card.Img variant="top" src={hero.image.url} />
            <Card.Body>
              <Card.Title>{hero.name}</Card.Title>
              <Button className='mt-4' variant="outline-info" onClick={() => addHeroToTeam(hero)}>Agregar al equipo</Button>
            </Card.Body>
          </Card>)}
        </Col>
      </Row>
    </Container>
   );
}
 
export default SelectHero;