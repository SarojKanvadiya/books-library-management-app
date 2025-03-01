import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Provider as ChakraProvider } from './components/ui/provider'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ChakraProvider>
      <App />
      </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
