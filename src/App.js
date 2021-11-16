import './styles/global.css'
import './styles/app.css'
import './styles/aside.css'
import api from './service/api'
import DevForm from './components/Form';
import DevItem from './components/Item';

import { useState } from 'react';



function App() {

  const [devs, setDevs] = useState([])

  async function loadDevs(){
    const response = await api.get('/users')
    setDevs(response.data)
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm />
        <button onClick={loadDevs}>Atualizar Lista</button>
      </aside>

      <main>
        <ul>
          {devs.map( dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App;
