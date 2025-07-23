import { Button } from "@/components/ui/button";
import CopyInput from "@/components/ui/copy-input";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <Image
        src="/gaming-monkey.gif"
        alt="Brad Pitt"
        width={400}
        height={400}
      />

      <div className="pt-8 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <Button asChild>
            <Link href="asd">
              <Download className="w-4 h-4" /> Download Modpack (curseforge)
            </Link>
          </Button>
          <span className="text-sm text-gray-500">v1.0.0</span>
        </div>
        <CopyInput value="mc.markusevanger.no" />
      </div>
    </div>
  );
}
