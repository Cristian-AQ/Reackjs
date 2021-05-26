import React, {useState,Fragment} from 'react';

const Contador = () => {
    
    //numero toma el valor de 0 y setNumero modificara numero 
    const [numero, setNumero] = useState(0);
    //const saludo = 'HOLA JSX'
    const temperatura = 21;

    const aumentar = () =>{
        console.log('me diste un click')
        setNumero(numero+1)
    }
    
    return ( 
        //fragemnt sirve para reemplazar algo q no se este utilizando
        <Fragment>
            <h1>FRIO O CALIENTE</h1>
            <h2>
                {
                    temperatura>20 ? 'CALOR':'FRIO'
                }
            </h2>
            <h3>MI PRIMER COMPONENTE {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;
