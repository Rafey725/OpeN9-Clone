import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/6')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/6"!</div>
}
