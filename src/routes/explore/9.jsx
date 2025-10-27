import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/explore/9')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/explore/9"!</div>
}
