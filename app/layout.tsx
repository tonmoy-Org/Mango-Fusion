import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DrawerAppBar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - MangoFusion",
  description: "Welcome to MangoFusion, your ultimate destination for the finest and most delicious mangoes. Discover the exquisite flavors of Khirsapati and Langra mangoes from the heart of Rajshahi. Explore our premium collection and enjoy the sweet and juicy essence of tropical mangoes delivered right to your doorstep."
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DrawerAppBar />
        <Box sx={{ minHeight: '100vh' }}>
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  );
}
