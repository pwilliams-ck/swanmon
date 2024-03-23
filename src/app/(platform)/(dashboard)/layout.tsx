import Navbar from './_components/navbar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-zinc-50">
      <Navbar />

      {children}
    </div>
  )
}

export default DashboardLayout
