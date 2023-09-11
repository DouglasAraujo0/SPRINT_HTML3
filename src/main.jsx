import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Error from './routes/Error/index.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import TotalmenteVirtual from './routes/TotalmenteVirtual/index.jsx'
import Detalhes from './routes/Detalhes/index.jsx'
import Simulacao from './routes/Simulacao/index.jsx'
import TipoDoSeguro from './routes/TipoDoSeguro/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'
import ValidacaoVistoria from './routes/ValidacaoVistoria/index.jsx'
import Integrantes from './routes/Integrantes/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/TotalmenteVirtual',
        element: <TotalmenteVirtual/>
      },
      {
        path: '/Detalhes',
        element: <Detalhes/>
      },
      {
        path: '/Simulacao',
        element: <Simulacao/>
      },
      {
        path: '/Simulacao/TipoDoSeguro',
        element: <TipoDoSeguro/>
      },
      {
        path: '/Simulacao/TipoDoSeguro/Vistoria',
        element: <Vistoria/>
      },
      {
        path: '/Simulacao/TipoDoSeguro/Vistoria/ValidacaoVistoria',
        element: <ValidacaoVistoria/>
      },
      {
        path: '/Integrantes',
        element: <Integrantes/>
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
