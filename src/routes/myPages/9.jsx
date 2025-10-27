import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myPages/9')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myPages/9"!</div>
}
