import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore/8')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/explore/8"!</div>
}
