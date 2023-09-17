import React from "react";
import { InputText } from 'primereact/inputtext';
import { useState } from "react";  
import { Button } from 'primereact/button';
import { useContact } from "../Context/ContactContext";

import { useEffect,useState } from "react";
const initialvalue={
    nombre:"",
    apellidos:"",
    sexo:"",
    distrito:"",
    telefono:"",
    direccion:"",
    correo:"",
    fecha_nacimiento:"",
    id:null
}

function Formulario(props){
   
    
    const [form,Setform]=useState(initialvalue)
    const inputchange=(e)=>{
        Setform({
            ...form,[e.target.name]:e.target.value,
        })
    }


    
    return (
        <form  style={{ width: '100%' }} className="flex flex-column  gap-5 mt-4" >
            <span className="p-float-label">
                <InputText style={{width:"100%"}} id="apellidos" value={form.apellidos} onChange={inputchange} />
                <label htmlFor="apellidos">Apellidos</label>
            </span>

            <span className="p-float-label">
                <InputText style={{width:"100%"}}  id="sexo" value={form.sexo} onChange={inputchange} />
                <label htmlFor="sexo">Sexo</label>
            </span>


            <span className="p-float-label">
                <InputText  style={{width:"100%"}} id="distrito" value={form.distrito} onChange={inputchange} />
                <label htmlFor="distrito">Distrito</label>
            </span>


            <span className="p-float-label">
                <InputText style={{width:"100%"}} id="telefono" value={form.telefono} onChange={inputchange} />
                <label htmlFor="telefono">Telefono</label>
            </span>

            <span className="p-float-label">
                <InputText style={{width:"100%"}} id="direccion" value={form.direccion} onChange={inputchange}/>
                <label htmlFor="direccion">Direccion</label>
            </span>

            <span className="p-float-label">
                <InputText  style={{width:"100%"}} id="correo" value={form.correo} onChange={inputchange} />
                <label htmlFor="correo">Correo</label>
            </span>

            <span className="p-float-label">
                <InputText style={{width:"100%"}} id="nacimiento" value={form.nacimiento}onChange={inputchange} />
                <label htmlFor="nacimiento">Nacimiento</label>
            </span>
            <Button label="Enviar" severity="primary" />
        </form>
        



    )

}
export default Formulario