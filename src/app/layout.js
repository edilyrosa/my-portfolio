import "./globals.css";
import Header from "./header/Header";
import ResponsiveLayout from "../components/ResponsiveLayout";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden h-screen grid grid-rows-[auto_auto] 
      overflow-y-scroll scroll-smooth hide-scrollbar">
        <header className="row-span-1 flex items-center justify-center scroll-smooth">
          <Header />
          <div className="h-[50vh] md:h-screen"></div>
        </header>
        <ResponsiveLayout>{children}</ResponsiveLayout>

      </body>
    </html>
  );
}
