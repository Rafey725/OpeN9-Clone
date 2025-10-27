import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/7')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/7"!</div>
}
