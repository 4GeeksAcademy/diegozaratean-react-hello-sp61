import React from "react";

const Card = (props)=>{
    console.log(props)
    return(
        <div className="card" style={{width: '18rem', backgroundColor: '#ccc'}} >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">consulta las respeusta del usuairo u/{props.usuario}</p>
                <a href="#" className="btn btn-primary">Ver mas  {props.votos} votos</a>
            </div>
        </div>
    )
}

export default Card;