import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/3')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/3"!</div>
}
