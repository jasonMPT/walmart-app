import { createFileRoute } from '@tanstack/react-router'
import { Login } from './login'
export const Route = createFileRoute('/')({
  component: Login,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}