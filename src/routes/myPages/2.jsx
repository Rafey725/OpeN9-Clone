import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/2"!</div>
}
