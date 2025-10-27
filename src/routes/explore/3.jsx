import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore/3')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/explore/3"!</div>
}
