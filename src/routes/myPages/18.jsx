import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/18')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/18"!</div>
}
