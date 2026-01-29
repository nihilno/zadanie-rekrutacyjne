import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "./react-query";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
        <Toaster />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
