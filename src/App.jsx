import { useState } from 'react'
import Confetti from './ Confetti'
import reactLogo from './assets/react.svg'
import containerAppSplash from './assets/containerapps-run.jpg';
import animatedInstruction from './assets/docker_login_push.gif';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Confetti />
      <h2>Поздравляем!!! 👏 </h2>
      <div>
        <p>
          Вы развернули первое приложение c помощью Container Apps & Artifact Registry в облаке Cloud.ru Evolution.
        </p>
        {/* <img src={containerAppSplash} width={'400px'} /> */}
      </div>
      <p className="read-the-docs">
        
        <ul>
          <li>
            docker build --tag helloworld.cr.cloud.ru/react . --platform linux/amd64
          </li>
          <li>
            docker push helloworld.cr.cloud.ru/react
          </li>
        </ul>
      </p>
      <button onClick={() => window.open('https://console.cloud.ru', "_blank", "noreferrer")}>
          Назад в console.cloud.ru
      </button>
    </>
  )
}

export default App
