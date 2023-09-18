
import './App.css';
import { createClient } from '@supabase/supabase-js';
import 'primereact/resources/themes/saga-blue/theme.css'; // Importa el tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Importa los estilos de PrimeReact
import 'primeicons/primeicons.css'; // Importa los íconos de PrimeReact     
import Crud from './components/Crud';
import Modal from './components/modal';    
import Table from './components/table';
import { Button } from 'primereact/button'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../src/css/estilos.css'

// const imprimir=()=>{
  
//   results()
// }        

function App() {
  return (
    <Crud></Crud>

    

    
  );
}

export default App;
