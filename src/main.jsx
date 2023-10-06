import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/AuthProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={ router }/>
		</AuthProvider>
	</React.StrictMode>,
)
