import { Navbar } from "./_components/navbar"

export default function LandingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full bg-zinc-800 text-secondary">
      <Navbar />
      <main className="pt-40 pb-20 bg-zinc-800">{children}</main>
      {/* Footer */}
    </div>
  )
}
