import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/12')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/12"!</div>
}
