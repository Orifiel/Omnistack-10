import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
/*
Componente - Um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
Propriedade - Informações de um componente PAI passa para o componente FILHO
Estado - Informações mantidas pelo componente(lembrar -> imutabilidade)
*/ 



function App() {
  const [devs, setDevs] = useState([])
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

async function handleAddDev(e){
  e.preventDefault()

  const response = await api.post('/devs', {
    github_username,
    techs,
    latitude,
    longitude,
  })
  setGithubUsername('')
  setTechs('')

}

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords

      setLatitude(latitude)
      setLongitude(longitude)

    },
    (err) => {
      console.log(err)
    },
    {
      timeout: 30000,
    }
  )
  }, [])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')
      setDevs(response.data)
    }
  })


  return (
    <div id="app">
      <aside> 
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
          <label htmlFor="github_username">Usuário Github</label>
          <input 
            name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)} 
          />
          </div>

          <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
            name="techs" 
            id="techs" 
            required 
            value={techs}
            onChange={e => setTechs(e.target.value)}
          />
          </div>

          <div className="input-group">

              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                  type="number" 
                  name="latitude" 
                  id="latitude" 
                  required 
                  value={latitude}
                  onChange={e => setLatitude(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                  type="number" 
                  name="longitude" 
                  id="longitude" 
                  required 
                  value={longitude}
                  onChange={e => setLongitude(e.target.value)}
                />
              </div>

          </div>
         
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/49954230?s=400&u=039d31920fe1bff802ead722a943dc6df4d7991a&v=4" alt="Cleiton"/>
                <div className="user-info">
                  <strong>Cleiton Mattos</strong>
                  <span>React, NodeJS, JS, MongoDB</span>
                </div>
              </header>
              <p>Aprendendo desenvolvimento web a 6 meses, ainda engatinhando nos primeiros codigos com JS</p>
              <a href="https://github.com/Orifiel">Acessar Perfil no Github</a>
            </li>
            
            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/49954230?s=400&u=039d31920fe1bff802ead722a943dc6df4d7991a&v=4" alt="Cleiton"/>
                <div className="user-info">
                  <strong>Cleiton Mattos</strong>
                  <span>React, NodeJS, JS, MongoDB</span>
                </div>
              </header>
              <p>Aprendendo desenvolvimento web a 6 meses, ainda engatinhando nos primeiros codigos com JS</p>
              <a href="https://github.com/Orifiel">Acessar Perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/49954230?s=400&u=039d31920fe1bff802ead722a943dc6df4d7991a&v=4" alt="Cleiton"/>
                <div className="user-info">
                  <strong>Cleiton Mattos</strong>
                  <span>React, NodeJS, JS, MongoDB</span>
                </div>
              </header>
              <p>Aprendendo desenvolvimento web a 6 meses, ainda engatinhando nos primeiros codigos com JS</p>
              <a href="https://github.com/Orifiel">Acessar Perfil no Github</a>
            </li>

            <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/49954230?s=400&u=039d31920fe1bff802ead722a943dc6df4d7991a&v=4" alt="Cleiton"/>
                <div className="user-info">
                  <strong>Cleiton Mattos</strong>
                  <span>React, NodeJS, JS, MongoDB</span>
                </div>
              </header>
              <p>Aprendendo desenvolvimento web a 6 meses, ainda engatinhando nos primeiros codigos com JS</p>
              <a href="https://github.com/Orifiel">Acessar Perfil no Github</a>
              
            </li>
        </ul>
      </main>
    </div>
  )
  

}

export default App;
