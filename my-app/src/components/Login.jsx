import React from 'react';
import Diablito from './Diablito'

const Login = () => {
    return ( 
        <div className='container border text-center' >
            <h1>LOGIN</h1>
            <Diablito />
            <input 
            type="text" 
            placeholder='Usuario'
            name='user'
            />
            <input 
            type="password" 
            placeholder='Contraseña'
            name='password'
            />
            <button type='submit'>ENTRAR</button>
        </div>
     );
}
export default Login;