import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore/7')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/explore/7"!</div>
}
