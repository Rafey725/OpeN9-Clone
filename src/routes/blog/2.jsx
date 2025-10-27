import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/2"!</div>
}
