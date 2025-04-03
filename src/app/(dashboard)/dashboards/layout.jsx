import "../globals.css";
import SidebarComponent from "./sidebar/SidebarComponent";

export const metadata = {
  title: {
    template: "keyy",
    default: "whatever..",
  },
  description: "...",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">{children}</body>
    </html>
  );
}
