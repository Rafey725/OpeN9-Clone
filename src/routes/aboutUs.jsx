import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboutUs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/AboutUs"!</div>
}
