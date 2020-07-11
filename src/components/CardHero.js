import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {AiTwotoneLike, AiTwotoneDislike} from 'react-icons/ai'
const CardHero = (props) =>{
    const [toggle, setToggle]= useState(false);
	
	useEffect(()=>{
	if(toggle){
	localStorage.setItem(`${props.name}`,"Me gusta")
	}
else{
	localStorage.setItem(`${props.name}`,"No me gusta")
}
})
const handleLike=()=>{
setToggle(true)
}
const handleDeslike=()=>{
setToggle(false)
}

    return(
    <section className='card-place'>
    <Card className='cards'>
      <Card.Header className='text-center card-header'><h6>{props.name}</h6></Card.Header>

      <img className='m-3 mx-auto' width="50%" height="160px" variant="top"  src={props.image} />

      <Card.Body className='mx-auto' >
    <ul>
      <li>Inteligencia: {props.intelligence}</li>
    <li>Velocidad: {props.speed}</li>
    <li>Poder: {props.power}</li>
    </ul>
        <Button className="btn-card-like" style={{marginLeft:"3px"}} onClick={handleLike}><AiTwotoneLike/></Button>
        <Button className="btn-card-like" style={{marginLeft:"3px", marginRight:"3px"}} onClick={handleDeslike}><AiTwotoneDislike/></Button>
        <Button className='btn-card-place'> <Link style={{color:"white"}} to={`/${props.id}`}>Más informacion</Link> </Button>

        
      </Card.Body>
    </Card>
  </section>
    )
}

export default CardHero;
