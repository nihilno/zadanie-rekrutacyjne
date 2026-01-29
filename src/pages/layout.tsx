import GlobalSidebar from "@/components/global/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import type React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalSidebar />
      <SidebarTrigger />
      <section className="flex min-h-dvh w-full flex-col">
        <main className="mx-auto mt-32 w-full max-w-7xl">{children}</main>
      </section>
    </>
  );
}

export default Layout;
