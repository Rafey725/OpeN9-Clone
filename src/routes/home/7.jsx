import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/7')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/7"!</div>
}
