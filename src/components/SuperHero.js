import React, {useState,useEffect} from 'react'
import CardHero from './CardHero'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
const SuperHero = () =>{
    const [cont, setCont]=useState(1);	
    const [pageHero, setPageHero]=useState([]);

    useEffect(()=>{
	setPageHero([])
        arraux.map((arraux)=>{
           axios.get(`https://www.superheroapi.com/api.php/3167387836641205/${arraux}`)
           .then(res=>{
               
		 setPageHero(pageHero=>[...pageHero, res.data]);
		
           })
           .catch((error)=>{
               console.log(error)
           })
        })
	
    },[cont])
    const handleClickNext=()=>{
        if(cont<=82){
        setCont(cont+1);
        }
        else{
            setCont(82);
        }
        
    }
    const handleClickPreview=()=>{
        if(cont>1){
        setCont(cont-1);
        }
        else{
            setCont(1);
        }
    }
const arr=[1,2,3,4,5,6,7,8,9]
const arraux=arr.map((arr)=>{
    if(cont===1){
    return(
        arr
    );
    }
    else if(cont>1){
        let n=9*(cont-1);
        return(
            arr+n
        );
    }
});

    return (

        <Container className='container-cards'>
            
        <div className='title-places'><h2>SuperHeroes y Villanos</h2></div>
        <article className="d-flex  justify-content-around">
        <Button className="btn-card-pag" onClick={handleClickPreview}>Anterior</Button>
        <Button className="btn-card-pag" onClick={handleClickNext}>Siguiente</Button>
        </article>    
        <CardDeck className='justify-content-center'>
            {
                pageHero!==0&&pageHero.map((arr, indx) => {

			return (
			
                        <CardHero key={indx} image={arr.image.url} name={arr.name} />
                    )
                })
            }
            
        </CardDeck>
        <article className="d-flex  justify-content-around">
        <Button className="btn-card-place" onClick={handleClickPreview}>Anterior</Button>
        <Button className="btn-card-place" onClick={handleClickNext}>Siguiente</Button>
        </article> 
    </Container>

    )

}

export default SuperHero;
