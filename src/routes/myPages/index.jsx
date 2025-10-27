import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/1"!</div>
}
