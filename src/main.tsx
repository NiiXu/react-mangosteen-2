import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import './global.scss'
import 'virtual:uno.css'
import './app.scss'
import 'virtual:svgsprites'
import vhCheck from 'vh-check'
vhCheck()
const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
export { div as rootDiv }