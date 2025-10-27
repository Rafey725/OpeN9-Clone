import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/slider3d')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/slider3d"!</div>
}
