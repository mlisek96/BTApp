import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { BudgetsProvider } from "./contexts/BudgetContext.jsx";
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BudgetsProvider>
          <App />
      </BudgetsProvider>
  </React.StrictMode>
)
