import { IconCloud } from "./components/ui/icon-cloud"

const slugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "axios",
  "cypress",
  "eslint",
  "prettier",
  "styledcomponents",
  "tailwindcss",
  "nodedotjs",
  "biome",
  "docker",
  "fastify",
  "insomnia",
  "postman",
  "prisma",
  "postgresql",
  "vitest",
  "git",
  "figma",
  "vercel",
]

export function App() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <main className="flex items-center justify-center h-screen bg-zinc-900">
      <IconCloud images={images} />
    </main>
  )
}
