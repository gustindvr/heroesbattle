import {useState} from 'react';
import Modal from '../Modal/Modal';

import {Container, Row, Col, Card, ListGroup, Button, Table, CardGroup} from 'react-bootstrap';

const Team = ({team, powerStats, deleteHero}) => {

  const [modal, setModal] = useState(false);
  const [dataHero, setDataHero] = useState({})

  const detailsHero = (hero) => {
    setDataHero(hero);
    setModal(true)
  }

  return ( 
    <>
      {modal ? 
          <Modal 
            dataHero={dataHero}
            setModal={setModal}
          /> 
          : null
        };
      <Container  className='m-0 p-0' fluid >
        <Row className='w-100 justify-content-around' >
          {team.length === 0 ? 
            <h2>No hay Equipo</h2> : 
            <Col sm={12} md={7} lg={7} className='d-flex mt-5 row justify-content-center text-center'>
            {team.map(hero => 
            <CardGroup>
              <Card style={{ width: '12rem' }} className='m-2 d-flex' key={hero.id}>
                <Card.Img variant="top" src={hero.image.url} style={{width: '12rem', height: '15rem'}} />
                <Card.Body>
                  <Card.Title>{hero.name}</Card.Title>
                    <ListGroup>
                      <ListGroup.Item variant='danger'>Combate: {hero.powerstats.combat}</ListGroup.Item>
                      <ListGroup.Item variant='warning'>Durabilidad: {hero.powerstats.durability}</ListGroup.Item>
                      <ListGroup.Item variant='warning'>Inteligencia: {hero.powerstats.intelligence}</ListGroup.Item>
                      <ListGroup.Item variant='danger'>Poder: {hero.powerstats.power}</ListGroup.Item>
                      <ListGroup.Item variant='warning'>Velocidad: {hero.powerstats.speed}</ListGroup.Item>
                      <ListGroup.Item variant='danger'>Fuerza: {hero.powerstats.strength}</ListGroup.Item>
                    </ListGroup>
                  <Button className='mt-4 mr-2' variant="outline-dark" onClick={() => detailsHero(hero)}>Ver detalles</Button>
                  <Button className='mt-4' variant="outline-danger" onClick={() => deleteHero(hero.id, hero)}>Eliminar</Button>
                </Card.Body>
              </Card>
            </CardGroup>)}
          </Col>
          }
          {team.length === 0 ? 
            <h2>No hay estadisticas</h2> : 
            <Col sm={12} md={5} className=''>
              <Table responsive className='mt-5'>
                <thead>
                  <tr>
                    <th>Habilidades</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Combate:</td>
                    <td>{powerStats.combat}</td>
                  </tr>
                  <tr>
                    <td>Durabilidad:</td>
                    <td>{powerStats.durability}</td>
                  </tr>
                  <tr>
                    <td>Inteligencia:</td>
                    <td>{powerStats.intelligence}</td>
                  </tr>
                  <tr>
                    <td>Poder:</td>
                    <td>{powerStats.power}</td>
                  </tr>
                  <tr>
                    <td>Velocidad:</td>
                    <td>{powerStats.speed}</td>
                  </tr>
                  <tr>
                    <td>Fuerza:</td>
                    <td>{powerStats.strength}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          }
        </Row>
      </Container>
    </>
   );
}
 
export default Team;