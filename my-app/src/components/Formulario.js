import React,{useState,Fragment} from 'react';

const Formulario = () => {
    const [datos,setDatos] = useState({
        nombre:'',
        apellido:''
    })

    const handleInputChange = (event) =>{
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) =>{
        event.preventDefault();//evita el procesamiento automatico
        console.log(datos.nombre+' '+datos.apellido)
    }

    return (
        <Fragment>
            <h1>FORMULARIO</h1>
            <form className='row' onSubmit={enviarDatos}>
                <div className='col-md-3'>
                    <input
                        placeholder='INGRESAR NOMBRE' 
                        className='from-control'
                        type='text'
                        name='nombre'
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-md-3'>
                    <input
                        placeholder='INGRESAR APELLIDO' 
                        className='from-control'
                        type='text'
                        name='apellido'
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-md-3'>
                    <button className='btn btn-primary' type='submit'>Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre}-{datos.apellido}</h3>
        </Fragment> 
        
     );
}
 
export default Formulario;