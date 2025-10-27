import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello from home 2</div>
}
