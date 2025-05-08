import React from 'react'
import Sidebar from '../components/Sidebar'

function Authenticated({ children }) {
	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<main className="flex-1 p-8 overflow-auto">
				{children}
			</main>
		</div>
	)
}

export default Authenticated