import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/5')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/5"!</div>
}
