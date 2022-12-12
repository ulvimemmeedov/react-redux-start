import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './app/redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>,
    </ThemeProvider>
  </React.StrictMode>
)
