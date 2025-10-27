import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/3')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/3"!</div>
}
