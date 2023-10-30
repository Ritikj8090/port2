import "./globals.css";
 
export const metadata = {
  title: "< RITIK JAISWAL />",
  description: "A personal portofolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
        </body>
    </html>
  );
}
