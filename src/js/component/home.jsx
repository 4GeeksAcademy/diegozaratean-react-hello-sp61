import React from "react";

// 4. Importar componente
import Navbar from './navbar.jsx'
// 5. Usar componente

const Home = () => {
	return (		
		<>
			<Navbar />
			<h1 className="text-center mt-5">Hola bienvenidos a React :) 123!</h1>		
			<h2>React no es tan dificil como pensaba </h2>
		</>
	);
};

export default Home;
