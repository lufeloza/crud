import { useState,useEffect } from "react"
import { useForm } from "react-hook-form"

const UsersForm = ({addUser, userSelected, editUser}) =>{
    const [date, setDate] = useState();
    const { register, handleSubmit, reset} = useForm()

    const CleanForm =() =>{
        reset({
            first_name : '',
            last_name : '',
            email : '',
            password : '',
            birthday : ''  
                         
        })
    }

    useEffect (() => {
        if(userSelected !== null){
            reset(userSelected)
        }else{
            
            CleanForm()
        }

    }, [userSelected])

    const submit = data=>{
        console.log(data)
        
        if(userSelected !==null){
            editUser(data)
            CleanForm()
        }else{
            addUser(data)
            CleanForm()
        }
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit(submit)}>
                <h2>Formulario Usuarios</h2>
                <div className="input-container">
                    <label htmlFor="p-first_name">Nombre del Usuario</label>
                    <input 
                    type="texto"
                    id="p-first_name"
                    {...register('first_name', {required : true})}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="p-last_name"> Apellido del Usuario</label>
                    <input 
                    type="texto"
                    id="p-first_name"
                    {...register('last_name', {required : true})}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="p-email">Email del Usuario</label>
                    <input 
                    type="text"
                    id="p-email"
                    {...register('email',{required : true})}
                    />
                <div className="input-container">
                    <label htmlFor="p-password">Contraseña</label>
                    <input 
                    type="password"
                    id="p-password"
                    {...register('password',{required : true})}
                    />
                </div>
                </div>
                <div className="input-birthday">
                    <label htmlFor="p-birthday">Fecha de nacimiento:{date}</label><br />
                    <input 
                    type="date"
                    id="p-birthday"
                    onChange={e =>setDate(e.target.value)}
                    {...register('birthday', {required : true})}
                    />
                </div>
                
                <button className="button-enviar">Enviar</button>

            </form>
        </div>
    )
}

export default UsersForm