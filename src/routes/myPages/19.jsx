import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/19')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/19"!</div>
}
