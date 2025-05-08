import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/settings')({
	component: Settings,
})

function Settings() {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Settings</h1>
			<div className="bg-white p-6 rounded-lg shadow">
				<p>Settings content goes here</p>
			</div>
		</div>
	)
} 