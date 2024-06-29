import { UserAuthForm } from "@/components/ui/user-auth-form";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {

  
  return (
    <div className="flex items-center justify-center min-h-dvh">
      <UserAuthForm />
    </div>
  );
}
