import { createFileRoute, Outlet } from '@tanstack/react-router'
import Authenticated from '../../layouts/Authenticated'

export const Route = createFileRoute('/app')({
  component: AppLayoutComponent,
})

function AppLayoutComponent() {
  return <Authenticated><Outlet /></Authenticated>
}
