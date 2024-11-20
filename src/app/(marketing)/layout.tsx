import { Footer } from './_components/footer';
import { Navbar } from './_components/navbar';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full text-secondary bg-zinc-50">
      <Navbar />
      <main className="pt-40 pb-20">{children}</main>
      <Footer />
    </div>
  );
}
