import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/3')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/3"!</div>
}
