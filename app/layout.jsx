import Nav from "@/components/Navbar/Nav";
import "../styles/globals.css";
import { Bodoni_Moda } from "next/font/google";
import Provider from "@/components/Provider";

const font = Bodoni_Moda({ subsets: ["latin"] });

export const metadata = {
  title: "Biddify",
  description: "eCommerce Bidding Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} lg:px-20 md:px-20 px-8`}>
        <Provider>
          <Nav />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
