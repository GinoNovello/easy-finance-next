import { HomeIcon, UserIcon, SettingsIcon } from "lucide-react";
import { Sidebar } from "../components/sidebar";
import { SidebarItem } from "../components/sidebaritems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClientSidebar } from "../components/client-sidebar";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <ClientSidebar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
