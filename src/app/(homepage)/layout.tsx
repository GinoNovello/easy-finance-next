import { HomeIcon, UserIcon, SettingsIcon } from "lucide-react";
import { Sidebar } from "../components/sidebar";
import { SidebarItem } from "../components/sidebaritems";
import Link from "next/link";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<HomeIcon />} text="Home" active />
        <SidebarItem icon={<UserIcon />} text="Profile" />
        <Link href="/settings">
          <SidebarItem icon={<SettingsIcon />} text="Settings" />
        </Link>
      </Sidebar>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
