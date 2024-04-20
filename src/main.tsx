import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/view/App'
import '@/view/index.css'
import { initialState } from '@/shell/state'
import { createShell } from '@/shell/shell'

const shell = createShell(initialState)
export const ShellContext = createContext(shell)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShellContext.Provider value={shell}>
      <App />
    </ShellContext.Provider>
  </React.StrictMode>
)
