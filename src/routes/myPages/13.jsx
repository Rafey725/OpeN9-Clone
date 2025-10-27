import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/13')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/13"!</div>
}
