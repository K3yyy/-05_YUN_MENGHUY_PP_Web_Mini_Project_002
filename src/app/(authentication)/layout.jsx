// import "@/style/.globals.css";
import "../../../style/globals.css";
import Logo from "@/components/logo";

export const metadata = {
  title: {
    template: "Keyy",
    default: "whatever..",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <div className="container mx-auto my-12">{/* <Logo /> */}</div>

        {children}
      </body>
    </html>
  );
}
