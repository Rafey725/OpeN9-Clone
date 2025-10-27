import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/15')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/15"!</div>
}
