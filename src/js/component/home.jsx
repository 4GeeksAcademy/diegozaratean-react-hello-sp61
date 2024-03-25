import React from "react";

// 4. Importar componente
import Navbar from './navbar.jsx'
import Jumbotron from "./jumbotron.jsx";
import Buybutton from "./buybutton.jsx";
import Card from "./card.jsx";
// 5. Usar componente

const Home = () => {
	return (		
		<>
			<Navbar />
			<Jumbotron />
			<h1 className="text-center mt-5">Hola bienvenidos a React :) 123!</h1>		
			<h2>React no es tan dificil como pensaba </h2>
			<Buybutton/>
			<Card titulo='Nuclear revenge' votos='123' usuario='blondy' />
			<Card titulo='Ask reddit' votos='423560' usuario='reddit' />
			<Card titulo='Investments advice' votos='43' usuario='diego' />

		</>
	);
};

export default Home;
