import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">About</h1>
      <p className="mt-2">Hello from About!</p>
    </div>
  )
}
