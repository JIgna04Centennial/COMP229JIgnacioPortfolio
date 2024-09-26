/*

Student Name: James Ignacio\
Class: COMP-229 - 409
Student ID: 822865945

*/


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
