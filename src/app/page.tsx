import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  return (
          <div className="flex flex-col items-center justify-center">
              Futuro login
              <Link className="border rounded-lg bg-green-300 text-rose-500 p-2" href='/dashboard'>Dashboard</Link>
                    </div>
  );
}
