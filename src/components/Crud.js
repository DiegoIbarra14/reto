import React, { useState, useEffect,useRef} from 'react';
import { supabase } from '../supabase/client'; // Asegúrate de ajustar la importación a tu ubicación real
import { Button } from 'primereact/button'; // Importa el componente Button de PrimeReact
import Modal from './modal'; // Ajusta la importación según tu ubicación real
import Table from './table'; // Ajusta la importación según tu ubicación real
import { Mensajes } from './mensajes';
import { Toast } from 'primereact/toast';

function Crud(){
  const [mostrarModal, setMostrarModal] = useState(false);
  const toast=useRef(null)
 
    const showToast=(severity, summary, detail)=>{
        toast.current.show({ severity, summary, detail, life: 3000 });
    }
    function capitalizeWords(input) {
        return input.replace(/\b\w/g, char => char.toUpperCase());
    }
    const [contacts, setContacts] = useState([]);
    const [dataEdit,SetDataEdit]=useState(null)
    async function insert(data) {
        const { res, error } = await supabase.from('Contactos').insert([{nombre:capitalizeWords(data.nombre),apellidos:capitalizeWords(data.apellidos),sexo:capitalizeWords(data.sexo),distrito:capitalizeWords(data.distrito),telefono:data.telefono,direccion:data.direccion,correo:data.correo,fecha_nacimiento:data.fecha_nacimiento}]);
        const nuevo=await fetchContactos()
        setContacts(nuevo)

    }
    async function borrar(id){
      const { data, error } = await supabase.from('Contactos').delete().eq('id', id);
      if (error) {
        console.error('Error al eliminar tarea:', error.message);
      } else {
        showToast('success', 'Operacion Correcta', 'Datos Eliminado Correctamente')
        const nuevo=await fetchContactos()
        setContacts(nuevo)

      }


    }
    function createData(data){
        if(data.nombre==='' ||data.apellidos ===''|| data.sexo ===''|| data.distrito ===''|| data.telefono ===''|| data.direccion ===''|| data.correo ===''|| data.fecha_nacimiento===''){
            showToast('error', 'Error', 'Todos los campos son requeridos')
            return false
        }else{
            if(data.telefono.toString().length ===9){
                insert(data)
                showToast('success', 'Operacion Correcta', 'Datos insertados correctamente')
                return true
            }else{
                showToast('error', 'Error', 'El campo telefono debe tener al menos 9 digitos'+String.toString(data.telefono).length)
                return false


            }
        }
    }



    const actualizar = async (data) => {
      const { res, error } = await supabase.from('Contactos').update([{ nombre: capitalizeWords(data.nombre), apellidos: capitalizeWords(data.apellidos), sexo: capitalizeWords(data.sexo), distrito: capitalizeWords(data.distrito), telefono: data.telefono, direccion: data.direccion, correo: data.correo, fecha_nacimiento: data.fecha_nacimiento }]).eq('id', data.id)
      const nuevo=await fetchContactos()
      setContacts(nuevo)

    }
    const fetchContactos = async () => {
     
      const { data, error } = await supabase.from('Contactos').select('*');
      return data
      
    };



    const updateData = (data)=>{
      if (data.nombre === '' || data.apellidos === '' || data.sexo === '' || data.distrito === '' || data.telefono === '' || data.direccion === '' || data.correo === '' || data.fecha_nacimiento === '') {
        showToast('error', 'Error', 'Todos los campos son requeridos')
        return false
      }else{
        if (data.telefono.toString().length === 9) {
          actualizar(data)
          showToast('success', 'Operacion Correcta', 'Datos insertados correctamente')
          return true
        }else{
          showToast('error', 'Error', 'El campo telefono debe tener al menos 9 digitos' + String.toString(data.telefono).length)
          return false
        }
      }
    }


    async function fetchContacts() {
      const { data, error } = await supabase.from('Contactos').select('*');
      if (error) {
        console.error('Error al obtener contactos:', error.message);
      } else {
        setContacts(data);
        console.log(data)
      }
    }
    useEffect(() => {
      fetchContacts();
    }, []);
    const deleteData=(id)=>{
      borrar(id)
    }
    return (
      
        <div className=' content w-100 flex gap-3 flex-column'>
          <h1 className='text-center title-crud'>Bienvenido a la Sección de Contactos</h1>
          <Modal mostrarModal={mostrarModal} setMostrarModal={setMostrarModal} createData={createData} dataEdit={dataEdit} SetDataEdit={SetDataEdit} updateData={updateData} mensaje="Insertar" icon="pi pi-external-link" />
          <div className='content-table'>
            <Table setMostrarModal={setMostrarModal} contacts={contacts} deleteData={deleteData} SetDataEdit={SetDataEdit} />
          </div>
          
          <Toast ref={toast}></Toast>
        </div>
        
      
    );
    }


export default Crud