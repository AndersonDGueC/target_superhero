import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
const CharHero = () => {
    let params = useParams();
    const  [heroVill, setHeroVill]=useState(null)
    useEffect(()=>{
       
        axios.get(`https://www.superheroapi.com/api.php/3167387836641205/${params.id}`)
        .then(res=>{
            setHeroVill(res.data);
        })
    },[])
    console.log(heroVill)
   // console.log(heroVill.image.url)
return(
    <div>
	<h1 className="text-center p-4" style={{color:"#2A75B3"}}>SuperHeroes y Villanos</h1>
    <section className="row">
        
    <article className="col-sm-12 col-md-6 col-lg-6 p-5">
      {heroVill!=null&&<img
        className="img-fluid"
        style={{ width: "20rem", height: "20rem", marginLeft: "50px" }}
        src={heroVill.image.url}
        alt=""
      />}
    </article>
	
    <article className="col-sm-12 col-md-6 col-lg-6 p-5" style={{color:"#ED1D24"}}>
	
      {heroVill!=null&&<h1>{heroVill.name}</h1>}
	{heroVill!=null&&<h2>{heroVill.biography.publisher}</h2>}

      {heroVill!=null&&<p> <strong>Tendencia:</strong> <strong>{heroVill.biography.alignment}</strong></p>}
      <p>
        <strong>Genero: </strong>
        {heroVill!=null&&<strong>{heroVill.appearance.gender}</strong>}
      </p>
      <p>
        <strong>Raza: </strong>
        {heroVill!=null&&<strong>{heroVill.appearance.race}</strong>}
      </p>
      <p>
        <strong>Peso: </strong>
        {heroVill!=null&&<strong>{heroVill.appearance.weight[1]}</strong>}
      </p>
      <p>
        <strong>Altura: </strong>
        {heroVill!=null&&<strong>{heroVill.appearance.height[1]}</strong>}
      </p>
    </article>
  </section>
</div>
    )
}

export default CharHero;
