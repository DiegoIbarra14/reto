import React, { useEffect, useState }  from "react";
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useContact } from "../Context/ContactContext";
import { Button } from "primereact/button";
import { Row } from "primereact/row";
import 'bootstrap/dist/css/bootstrap.css';






function Table({SetDataEdit,contacts,setMostrarModal,deleteData}){
   
    
    const [filters,SetFilters]=useState({
        global:{value:null,matchMode:FilterMatchMode.CONTAINS},
        nombre:{value:null,matchMode:FilterMatchMode.STARTS_WITH},
        distrito:{value:null,matchMode:FilterMatchMode.STARTS_WITH}

    })
    const [filtro,setFiltro]=useState("")
    return(
        <DataTable
        value={contacts}
        dataKey="id"
        filters={filters}
        filterDisplay="row"

        paginator={true}
        rows={5}
        emptyMessage="No se Encontraron Contactos"
        globalFilterFields={['name', 'country.name', 'representative.name', 'status']}
        id="table"
        responsive
        >
            <Column field="nombre" header="Name" showFilterMenu={false} filter filterPlaceholder="Busqueda por nombre" style={{ minWidth: '12rem' }} />
            <Column field="apellidos" header="Pais" />
            <Column field="sexo" header="Sexo" />
            <Column field="distrito" header="Distrito" showFilterMenu={false} filter filterPlaceholder="Filtrar por Distrito"   />
            <Column field="telefono" header="Telefono" />
            <Column field="direccion" header="Direccion" />
            <Column field="correo" header="Correo" />
            <Column field="fecha_nacimiento" header="Fecha Nacimiento" />
            <Column
                header="Nueva Columna"
                body={(rowData) => (
                    // Contenido personalizado de la nueva columna
                    <div className="flex gap-2">
                        <Button className="flex gap-2 btn-table-delete" label="Borrar" onClick={()=>{deleteData(rowData.id)}}><i className="bi bi-trash"></i></Button>
                        <Button className="flex gap-2 btn-table-update" label="Editar" onClick={()=>{SetDataEdit(rowData);setMostrarModal(true);console.log(rowData.fecha_nacimiento)}}><i className="bi bi-pencil"></i></Button>
                    </div>
                    
                )}
                style={{ width: '12rem' }}
  />
        </DataTable>

    )


}

export default Table;