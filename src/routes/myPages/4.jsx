import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/4')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/4"!</div>
}
