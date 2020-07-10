import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const CardHero = (props) =>{
    return(
    <section className='card-place'>
    <Card className='cards'>
      <Card.Header className='text-center card-header'><h6>{props.name}</h6></Card.Header>

      <img className='m-3 mx-auto' width="50%" height="160px" variant="top"  src={props.image} />

      <Card.Body className='mx-auto' >
        
        <Button className='btn-card-place'> Más informacion </Button>

        
      </Card.Body>
    </Card>
  </section>
    )
}

export default CardHero;
