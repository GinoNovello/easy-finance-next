"use client";
import { HomeIcon, UserIcon, SettingsIcon } from "lucide-react";
import { Sidebar } from "../components/sidebar";
import { SidebarItem } from "../components/sidebaritems";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="flex">
      <Sidebar>
        <Link href="/dashboard">
          <SidebarItem
            icon={<HomeIcon />}
            text="Home"
            active={pathname === "/dashboard"}
          />
        </Link>
        <SidebarItem
          icon={<UserIcon />}
          text="Profile"
          active={pathname === "/profile"}
        />
        <Link href="/settings">
          <SidebarItem
            icon={<SettingsIcon />}
            text="Settings"
            active={pathname === "/settings"}
          />
        </Link>
      </Sidebar>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
