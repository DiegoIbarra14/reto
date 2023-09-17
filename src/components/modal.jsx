import React, { useEffect } from "react";
import { Button } from 'primereact/button'; 
import { Dialog } from 'primereact/dialog';
import { useState } from "react";  
import { InputText } from 'primereact/inputtext';

function Modal({createData,dataEdit,SetDataEdit,updateData,mostrarModal,setMostrarModal}){
    const valoresiniciales={
        "id":null,
        "nombre":"",
        "apellidos":"",
        "sexo":"",
        "distrito":"",
        "telefono":"",
        "direccion":"",
        "correo":"",
        "fecha_nacimiento":""
    }
    const [form, setForm] = useState(valoresiniciales);
    useEffect(()=>{
        if(dataEdit){
            setForm(dataEdit)
        }else{
            setForm(valoresiniciales)
        }
    },
    [dataEdit]) 
    const submit=(e)=>{
        e.preventDefault();
        if(form.id===null){
            const verify=createData(form)
            if(verify){
                reset()
            }
        }else{

            const validate=updateData(form)
            if(validate){
                setMostrarModal(false)
                reset()
            }
            
           
        }
        

                
    }   
    const reset=(e)=>{
        setForm(valoresiniciales)
        SetDataEdit(null)
    }
    function change(e){
        setForm({
            ...form,[e.target.name]:e.target.value, 
        })
    }
    return(
        <div>
            <Button  severity="info"label="Añadir" icon={"bi bi-person-plus-fill"} onClick={() => {setMostrarModal(true);reset()}} />
            <Dialog visible={mostrarModal} header={"Registro"}  style={{ width: '25vw' }} onHide={() => setMostrarModal(false)}>
                <form onSubmit={submit}style={{ width: '100%' }} className="flex flex-column  gap-5 mt-4" >
                    <span className="p-float-label">
                        <InputText style={{ width: "100%" }} name="nombre" className="w-70" id="nombre" value={form.nombre} onChange={change} />
                        <label htmlFor="nombre">Nombre</label>
                    </span>

                    <span className="p-float-label">
                        <InputText style={{ width: "100%" }} name="apellidos" id="apellidos" value={form.apellidos}onChange={change}/>
                        <label htmlFor="apellidos">Apellidos</label>
                    </span>


                    <span className="p-float-label">
                        <InputText style={{ width: "100%" }} id="sexo" name="sexo" value={form.sexo} onChange={change}/>
                        <label htmlFor="sexo">Sexo</label>
                    </span>


                    <span className="p-float-label">
                        <InputText style={{ width: "100%" }} id="distrito" name="distrito" value={form.distrito} onChange={change} />
                        <label htmlFor="distrito">Distrito</label>
                    </span>


                    <span className="p-float-label">
                        <InputText  type="number"style={{ width: "100%" }} id="telefono" name="telefono" value={form.telefono} onChange={change}/>
                        <label htmlFor="telefono">Telefono</label>
                    </span>

                    <span className="p-float-label">
                        <InputText style={{ width: "100%" }} id="direccion" name="direccion" value={form.direccion} onChange={change} />
                        <label htmlFor="direccion">Direccion</label>
                    </span>

                    <span className="p-float-label">
                        <InputText type="email" style={{ width: "100%" }} id="correo" name="correo"value={form.correo} onChange={change}  />
                        <label htmlFor="correo">Correo</label>
                    </span>

                    <span className="p-float-label">
                        <InputText type="date" style={{ width: "100%" }} id="nacimiento"  name="fecha_nacimiento" value={form.fecha_nacimiento} onChange={change} />
                       
                    </span>
                    <Button type="submit" label="Enviar" severity="primary" />
                </form>
            </Dialog>

        </div>)
}
export default Modal