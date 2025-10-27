import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore/5')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/explore/5"!</div>
}
