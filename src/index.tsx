import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'

//** StrictMode is doing some double check of component that might result in double-rendering of some component in case you wonder, thats perfectly fine behaviour */

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
