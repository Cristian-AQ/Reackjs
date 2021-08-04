import React,{useState} from 'react';
import './index.css';
import Modal from './components/Modal';
import styled from 'styled-components';

const App = () => {
	const [estadoModal1,setEstadoModal1] = useState(false);
	const [estadoModal2,setEstadoModal2] = useState(false);
	const [estadoModal3,setEstadoModal3] = useState(false);
	const [estadoModal4,setEstadoModal4] = useState(false);

	return (
		<div>
			<ContenedorBotones>
				<Boton onClick={()=>setEstadoModal1(!estadoModal1)}>Modal 1</Boton>
				<Boton onClick={()=>setEstadoModal2(!estadoModal2)}>Modal 2</Boton>
				<Boton onClick={()=>setEstadoModal3(!estadoModal3)}>Modal 3</Boton>
				<Boton onClick={()=>setEstadoModal4(!estadoModal4)}>Modal 4</Boton>
			</ContenedorBotones>
			{/* MODAL 1 */}
			<Modal
				estado={estadoModal1}
				cambiarEstado={setEstadoModal1}
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<Contenido>
					<img src='https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt=''></img>
				</Contenido>
			</Modal>
			{/* MODAL 2 */}
			<Modal
				estado={estadoModal2}
				cambiarEstado={setEstadoModal2}
				mostrarHeader={false}
				mostrarOverlay={false}
				posicionModal={'end'}
				padding={'20px'}
			>
				<Contenido>
					<h1>VENTANA MODAL2</h1>
					<p>asa</p>
					<Boton onClick={()=>setEstadoModal2(!estadoModal1)}>Aceptar</Boton>
				</Contenido>
			</Modal>
			{/* MODAL 3 */}
			<Modal
				estado={estadoModal3}
				cambiarEstado={setEstadoModal3}
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<Contenido>
					<h1>VENTANA MODAL3</h1>
					<p>asa</p>
					<Boton onClick={()=>setEstadoModal3(!estadoModal1)}>Aceptar</Boton>
				</Contenido>
			</Modal>
			{/* MODAL 4 */}
			<Modal
				estado={estadoModal4}
				cambiarEstado={setEstadoModal4}
				mostrarHeader={false}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'0px'}
			>
				<Contenido>
					<h1>VENTANA MODAL4</h1>
					<img src='https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt=''></img>
				</Contenido>
			</Modal>
		</div>
	);
}
 
export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;