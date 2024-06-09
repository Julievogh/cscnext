import "./globals.css";
import "./page.module.css";

export const metadata = {
  title: "Cozy Social Club",
  description: "A fusion of taste",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
