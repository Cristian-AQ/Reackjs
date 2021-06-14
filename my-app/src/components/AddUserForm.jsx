import React from 'react';
import {useForm} from 'react-hook-form'
const AddUserForm = (props) => {

    const {register,handleSubmit,formState:{errors}} = useForm()
    const onsubmit = (data,e) =>{
        props.addUser(data)
        e.target.reset()
    }

    return ( 
        <form onSubmit={handleSubmit(onsubmit)}>
            <label>Name</label>
            <input type="text" name='name' 
            {...register('name',{
                required:{
                    value:true, message:'Nombre requerido'
                }
            })}
            />
            <span className='text-danger text-small d-block mb2'>
                    {errors.name && errors.name.message}
                </span>
            <label>Username</label>
            <input type="text" name='username' 
            {...register('username',{
                required:{
                    value:true, message:'Nombre de Usuario requerido'
                }
            })}
            />
            <span className='text-danger text-small d-block mb2'>
                    {errors.username && errors.username.message}
                </span>
            <button>Add new user</button>
        </form>
     );
}
 
export default AddUserForm;