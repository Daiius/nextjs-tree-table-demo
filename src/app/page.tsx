import Button from "@/components/base/Button";
import Image from "next/image";

import PriorityOrderMark from "@/components/base/PriorityOrderMark";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>
        Hello, Next.js!
        <PriorityOrderMark/>
      </Button>
    </main>
  );
}
