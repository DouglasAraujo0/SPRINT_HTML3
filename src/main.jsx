import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './routes/Index/index.jsx'
import Integrantes from './routes/Integrantes/index.jsx'
import Error from './routes/Error/index.jsx'
import Detalhes from './routes/Detalhes/index.jsx'
import Simulacao from './routes/Simulacao/index.jsx'
import TipoDoSeguro from './routes/TipoDoSeguro/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'
import ValidacaoVistoria from './routes/ValidacaoVistoria/index.jsx'
import TotalmenteVirtual from './routes/TotalmenteVirtual/index.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Index/>
      },
      {
        path: '/Detalhes',
        element: <Detalhes/>
      },
      {
        path: '/TipoDoSeguro',
        element: <TipoDoSeguro/>
      },
      {
        path: '/IdentificarCliente',
        element: <Identificar/>
      },
      {
        path: '/Vistoria',
        element: <Vistoria/>
      },
      {
        path: '/Vistoria/Validacao',
        element: <ValidacaoVistoria/>
      },
      {
        path: '/Integrantes',
        element: <Integrantes/>
      },
      {
        path: '/Simulacao',
        element: <Simulacao/>
      },
      {
        path: '/TotalmenteVirtual',
        element: <TotalmenteVirtual/>
      },
      {
        path: '/TipoDoSeguro',
        element: <TipoDoSeguro/>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
