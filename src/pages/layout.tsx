import Sidebar from "@/components/global/sidebar";
import type React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid min-h-dvh grid-cols-[200px_1fr]">
      <Sidebar />
      <section>{children}</section>
    </main>
  );
}

export default Layout;
