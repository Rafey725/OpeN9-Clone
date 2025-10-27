import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/5')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/5"!</div>
}
