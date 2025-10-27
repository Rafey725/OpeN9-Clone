import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/8')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/8"!</div>
}
