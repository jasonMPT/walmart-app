import React from 'react'
import { Link, useLocation } from '@tanstack/react-router'

function Sidebar() {
	// Get the current path with tanstack router
	const location = useLocation()
	return (
		<div className="min-h-screen bg-base-200">
			<div className="flex flex-col h-full">
				{/* Logo/Brand Section */}
				<div className="p-4 border-b border-base-300">
					<div className="flex items-center gap-2">
						<svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
							<path d="M19.9 12.66a1 1 0 0 1-1.4-.3l-3.1-4.2-3.2 4.2a1 1 0 0 1-1.4.3 1 1 0 0 1-.3-1.4l3.9-5.2a1 1 0 0 1 1.6 0l3.9 5.2a1 1 0 0 1-.3 1.4z" />
						</svg>
						<span className="text-xl font-bold text-primary">Walmart</span>
					</div>
				</div>

				{/* Navigation Section */}
				<ul className="menu menu-lg bg-base-200 w-72 p-4">
					<li>
						<Link
							to="/app/dashboard"
							className={`flex items-center gap-3 hover:text-base-content ${location.pathname === '/app/dashboard' ? 'bg-primary text-white' : ''}`}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
							</svg>
							Dashboard
						</Link>
					</li>

					<li>
						<details open>
							<summary className={`flex items-center justify-between hover:text-base-content`}>
								<div className="flex items-center gap-3">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
									</svg>
									Items
								</div>
							</summary>
							<ul>
								<li>
									<Link
										to="/app/items"
										className={`flex items-center gap-3 hover:text-base-content ${location.pathname === '/app/items' ? 'bg-primary text-white' : ''}`}
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
										</svg>
										Get Items
									</Link>
								</li>
								<li>
									<Link
										to="/app/items/details"
										className={`flex items-center gap-3 hover:text-base-content ${location.pathname === '/app/items/details' ? 'bg-primary text-white' : ''}`}
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
										</svg>
										Get Item Details
									</Link>
								</li>
							</ul>
						</details>
					</li>

					<li>
						<Link
							to="/app/inventory"
							className={`flex items-center gap-3 hover:text-base-content ${location.pathname === '/app/inventory' ? 'bg-primary text-white' : ''}`}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
							</svg>
							Inventory
						</Link>
					</li>

					<li>
						<Link
							to="/app/orders"
							className={`flex items-center gap-3 hover:text-base-content ${location.pathname === '/app/orders' ? 'bg-primary text-white' : ''}`}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
							</svg>
							Orders
						</Link>
					</li>

					<li>
						<Link
							to="/app/returns"
							className={`flex items-center gap-3 hover:text-base-content ${location.pathname === '/app/returns' ? 'bg-primary text-white' : ''}`}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
							</svg>
							Returns
						</Link>
					</li>

					<li className="mt-auto">
						<Link to="/login" className="flex items-center gap-3 text-error hover:bg-error hover:text-error-content">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
							</svg>
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar