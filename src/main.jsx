import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './routes/Error/index.jsx'
import Detalhes from './routes/Detalhes/index.jsx'
import TipoDoSeguro from './routes/TipoDoSeguro/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'
import ValidacaoVistoria from './routes/ValidacaoVistoria/index.jsx'
import Organograma from './routes/organograma/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/Home/Detalhes',
        element: <Detalhes/>
      },
      {
        path: '/Home/IdentificarCliente/TipoDoSeguro',
        element: <TipoDoSeguro/>
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
        path: '/organograma',
        element: <Organograma/>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
