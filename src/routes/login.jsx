import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
	component: Login,
})

export function Login() {
	return <main className="flex flex-col items-center justify-center h-screen bg-primary">
		<div className="card lg:card-side bg-base-100 shadow-sm">
			<figure>
				<img
					src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
					alt="Album" />
			</figure>
			<div className="card-body w-96">
				<h2 className="card-title">Welcome to Cholla AI</h2>
				<p>A Walmart AI Assistant</p>
				<div className="card-actions justify-center">
					<Link to="/app/dashboard" className="btn btn-primary text-white">Login with Walmart</Link>
				</div>
			</div>
		</div>
	</main>
}
