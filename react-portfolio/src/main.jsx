import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

console.log('main.jsx loaded')

const rootEl = document.getElementById('root')
if (!rootEl) {
  document.body.style.background = '#ffcccc'
  document.body.innerHTML = '<pre style="color:darkred;padding:20px">Mount target #root not found in DOM</pre>'
} else {
  try {
    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  } catch (err) {
    console.error('React render error', err)
    document.body.style.background = '#ffeeee'
    document.body.innerHTML = `<pre style="color:darkred;padding:20px">React render error:\n${err instanceof Error ? err.message : String(err)}</pre>`
  }
}
