import {useState} from 'react'

import {Container, Row, Col, Card, ListGroup, Button, Table, CardGroup} from 'react-bootstrap';

const Team = ({team, powerStats}) => {

  const detailsHero = id => {
    console.log(id)
  }

  const deleteHero = id => {
    console.log(id)
  }

  return ( 
    <Container  className='m-0 p-0' fluid >
      <Row className='w-100' >
        {team.length === 0 ? 
          <h2>No hay Equipo</h2> : 
          <Col sm={12} md={7} lg={7} className='d-flex mt-5 row justify-content-center text-center'>
          {team.map(hero => 
          <CardGroup>
            <Card style={{ width: '12rem' }} className='m-2 d-flex' key={hero.id}>
              <Card.Img variant="top" src={hero.image.url} />
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
                <Button className='mt-4 mr-2' variant="outline-dark" onClick={() => detailsHero(hero.id)}>Ver detalles</Button>
                <Button className='mt-4' variant="outline-danger" onClick={() => deleteHero(hero.id)}>Eliminar</Button>
              </Card.Body>
            </Card>
          </CardGroup>)}
        </Col>
        }
        <Col sm={12} md={5} >
          <Table responsive className='mt-5'>
            <thead>
              <tr>
                <th>#</th>
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
      </Row>
    </Container>
   );
}
 
export default Team;