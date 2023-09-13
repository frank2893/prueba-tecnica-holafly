import "./globals.css";
import Navigation from "./components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Kittens</title>
      </head>
      <body className="p-[16px] sm:p-[100px]">
        <div className="border rounded ">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
