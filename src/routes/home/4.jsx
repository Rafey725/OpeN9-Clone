import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/4')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/4"!</div>
}
