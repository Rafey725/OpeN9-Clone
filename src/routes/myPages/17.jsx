import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/17')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/17"!</div>
}
