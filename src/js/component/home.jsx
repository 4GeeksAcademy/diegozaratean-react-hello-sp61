import React from "react";

// 4. Importar componente
import Navbar from './navbar.jsx'
import Jumbotron from "./jumbotron.jsx";
import Buybutton from "./buybutton.jsx";
// 5. Usar componente

const Home = () => {
	return (		
		<>
			<Navbar />
			<Jumbotron />
			<h1 className="text-center mt-5">Hola bienvenidos a React :) 123!</h1>		
			<h2>React no es tan dificil como pensaba </h2>
			<Buybutton/>
		</>
	);
};

export default Home;
