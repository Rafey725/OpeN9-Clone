import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/4')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/4"!</div>
}
