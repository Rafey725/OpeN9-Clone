import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/5')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/5"!</div>
}
