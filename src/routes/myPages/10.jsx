import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/10')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/10"!</div>
}
