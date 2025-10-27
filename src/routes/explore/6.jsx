import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore/6')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/explore/6"!</div>
}
