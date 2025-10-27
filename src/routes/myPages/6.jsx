import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/6')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/6"!</div>
}
