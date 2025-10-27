import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/sliderAnimations')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/sliderAnimations"!</div>
}
