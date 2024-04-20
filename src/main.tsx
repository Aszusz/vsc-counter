import { initialState } from '@/core/state'
import { createShell } from '@/shell/shell'
import App from '@/view/App'
import '@/view/index.css'
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'

const shell = createShell(initialState)
export const ShellContext = createContext(shell)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShellContext.Provider value={shell}>
      <App />
    </ShellContext.Provider>
  </React.StrictMode>
)
