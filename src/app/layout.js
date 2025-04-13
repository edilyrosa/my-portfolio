import "./globals.css";
import Header from "./header/Header";
import ResponsiveLayout from "../components/ResponsiveLayout";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-full mx-auto overflow-x-hidden h-screen grid grid-rows-[auto_auto] 
    hide-scrollbar overflow-y-scroll snap-y snap-mandatory scroll-smooth
      ">
      
      <div className="snap-start">
        <Header />
      </div>
         
    <div className="snap-start">
        <ResponsiveLayout>{children}</ResponsiveLayout>
    </div>

      </body>
    </html>
  );
}
