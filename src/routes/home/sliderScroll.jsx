import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/sliderScroll')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/sliderScroll"!</div>
}
