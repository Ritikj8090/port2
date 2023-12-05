import "./globals.css";
 
export const metadata = {
  title: "< RITIK JAISWAL />",
  description: "A personal portofolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
