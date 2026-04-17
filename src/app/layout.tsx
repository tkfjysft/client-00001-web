// src/app/layout.tsx
import { Header } from "@/components/Header"; // 追加
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* classNameに "bg-primary" または直接色を指定 */}
      <body className="bg-[#0F172A]">
        <Header /> {/* ここに追加 */}
        {children}
      </body>
    </html>
  );
}
