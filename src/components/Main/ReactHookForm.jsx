import React,{useEffect, useState} from 'react';
import {useForm} from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import './ReactHookForm.css'


const ReactHookForm = ()=>{
    const { register, handleSubmit, formState: {errors} } = useForm()
    const[auto,setAuto]=useState({})

    const onSubmit = data => {
        let dataForm={
            brand:data.marca,
            model:data.model,
            color:data.color,
            year:+data.year,
        }
        setAuto(dataForm)
    }

    useEffect(()=>{
        console.log(auto)
    },[auto])
    
    return(
        <div>
            <h1>REACT HOOK FORM</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="marca" placeholder="Marca" {...register('marca',{required:true, minLength: 3})}/> <br/>
                {
                    errors.marca &&(
                        <div><span>El campo es requerido.</span><br/></div>
                    )
                }
                <input name="model" placeholder="Modelo" {...register('model',{required:true, minLength: 3})}/> <br/>
                {
                    errors.model &&(
                        <div><span>El campo es requerido.</span><br/></div>
                    )
                }
                <select name="color" defaultValue="" placeholder="Color"{...register('color',{required:true})}>
                    <option hidden value="">Elegí</option>
                    <option value="white">Blanco</option>
                    <option value="red">Rojo</option>
                    <option value="green">Verde</option>
                </select> <br/>
                {
                    errors.color &&(
                        <div><span>El campo es requerido.</span><br/></div>
                    )
                }
                <input name="year" placeholder="Año"{...register('year',{required:'El campito es requeridito', minLength: 3})}/> <br/>
                <ErrorMessage errors={errors} name="year" render={({message})=><div><span className="color-rojo">{message}</span><br/></div>}/>
                <input type="submit" value="ENVIAR"/>
            </form>
        </div>
    )
}
export default ReactHookForm