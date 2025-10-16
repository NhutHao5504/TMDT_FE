// app/layout.tsx
import Header from "../components/Header";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <Header />
      <body className="min-h-dvh bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
