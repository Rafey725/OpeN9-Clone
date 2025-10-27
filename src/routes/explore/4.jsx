import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore/4')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/explore/4"!</div>
}
