import React,{useState,Fragment} from 'react';
import {useForm} from 'react-hook-form'//para la validacion

const Formulario = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()
    const onsubmit = (data,e) => {
        console.log(data)
        e.target.reset()
    }

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
            <form onSubmit={handleSubmit(onsubmit)}>
                <input
                    name='titulo'
                    className='form-control my-2'
                    {...register('titulo',{
                        required:{
                            value:true, message:'Titulo requerido'
                        }
                    })}
                />
                <span className='text-danger text-small d-block mb2'>
                    {errors.titulo && errors.titulo.message}
                </span>
                <button className='btn btn-primary'>Enviar</button>
            </form>
        </Fragment> 
        
     );
}
 
export default Formulario;