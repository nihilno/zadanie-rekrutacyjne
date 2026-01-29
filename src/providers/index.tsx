import { Toaster } from "@/components/ui/sonner";
import { UsersProvider } from "@/contexts/users-context";
import ReactQueryProvider from "./react-query";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UsersProvider>
          {children}
          <Toaster />
        </UsersProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
