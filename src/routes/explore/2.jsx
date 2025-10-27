import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore/2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/explore/2"!</div>
}
