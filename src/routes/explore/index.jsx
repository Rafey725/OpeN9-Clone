import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/explore/")({
  component: Explore,
});

function Explore() {
  return (
    <>
    hello brother i am from explore1
    </>
  );
}

export default Explore