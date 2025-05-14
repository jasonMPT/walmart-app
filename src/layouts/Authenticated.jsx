import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

function Authenticated({ children, title }) {
	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<main className="flex-1 p-8 overflow-auto">
				<Content title={title}>
					{children}
				</Content>
			</main>
		</div>
	)
}

export default Authenticated