import { createContext, useState } from "react";
import { useContext } from "react";
import { supabase } from "../supabase/client";

export const ContactContext=createContext()
export const useContact=()=>{
    const context =useContext(ContactContext)
    return context
}




export const ContactContextProvider=({children})=>{

    const [nombre,setNombre]=useState("");
    const [apellidos,setApellidos]=useState("");
    const [sexo,setSexo]=useState("");
    const [distrito,setDistrito]=useState("");
    const [telefono,setTelefono]=useState("");
    const [direccion,setDireccion]=useState("");
    const [correo,setCorreo]=useState("");
    const [nacimiento,setNacimiento]=useState("");


    const [user,SetUser]=useState({})
    const  [contact,SetContact]=useState([])
   
    const getContact= async function(){
        
        const data=await supabase.from("Contactos").select('*')
        SetContact(Object.values(data)[1])
        

    }
    

    

    

    return(
        <ContactContext.Provider value={{contact,getContact,nombre,setNombre,apellidos,setApellidos,sexo,setSexo,distrito,setDistrito,telefono,setTelefono,direccion,setDireccion,correo,setCorreo,nacimiento,setNacimiento}}>
            {children}
        </ContactContext.Provider>
    )
}
