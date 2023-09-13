import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import TotalmenteVirtual from './routes/TotalmenteVirtual/index.jsx'
import Detalhes from './routes/Detalhes/index.jsx'
import Simulacao from './routes/Simulacao/index.jsx'
import TipoDoSeguro from './routes/TipoDoSeguro/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'
import ValidacaoVistoria from './routes/ValidacaoVistoria/index.jsx'
import Integrantes from './routes/Integrantes/index.jsx'
import Organograma from './routes/Organograma/index.jsx'
import IdentificarClientes from './routes/IdentificarClientes/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/totalmentevirtual',
        element: <TotalmenteVirtual/>
      },
      {
        path: '/detalhes',
        element: <Detalhes/>
      },
      {
        path: '/simulacao',
        element: <Simulacao/>
      },
      {
        path: '/simulacao/identificacao',
        element: <IdentificarClientes/>
        
      },
      {
        path: '/simulacao/identificacao/tipodoseguro',
        element: <TipoDoSeguro/>
      },
      {
        path: '/simulacao/identificacao/tipodoseguro/vistoria',
        element: <Vistoria/>
      },
      {
        path: '/simulacao/identificacao/tipodoseguro/vistoria/validacaodavistoria',
        element: <ValidacaoVistoria/>
      },
      {
        path: '/integrantes',
        element: <Integrantes/>
      },
      {
        path: '/organograma',
        element: <Organograma/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

