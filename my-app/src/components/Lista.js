import React,{useState,Fragment} from 'react';

const Lista = () => {

    const [arrayNumero,setNumero] = useState([1,2,3,4,5,6,7])
    const agregarElemento = () =>{
        console.log('click')
        //setNumero([6])reemplaza a todos los elementos del array
        setNumero([...arrayNumero,6])//concatena el 6 al array
    }

    return ( 
        <Fragment>
            <button onClick={agregarElemento}>Agregando</button>
            <h2>Lista</h2>
            {
                arrayNumero.map((item,index) =>
                    <p key={index}>{item}-{index}</p>)
            }
        </Fragment>
     );
}
 
export default Lista;