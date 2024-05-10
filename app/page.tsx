import Image from "next/image";

import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-screen w-full items-center justify-center">
        <h1 className="text-5xl">Home</h1>
        <Button asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
