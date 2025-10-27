import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/11')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/11"!</div>
}
