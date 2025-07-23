import { Button } from "@/components/ui/button";
import CopyInput from "@/components/ui/copy-input";
import { ExternalLink } from "lucide-react";
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

      <div className="pt-10 flex flex-col items-center justify-center gap-8 w-full max-w-md">
        <div className="w-full flex flex-col items-center gap-3 bg-white/80 dark:bg-zinc-900/60 rounded-lg shadow p-5 border border-zinc-200 dark:border-zinc-800">
          <Button asChild className="w-full">
            <Link
              href="https://github.com/markusevanger/minecraft-server/releases"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-semibold">Last ned Modpack</span>
              <span className="text-xs text-zinc-500 ml-1">(modrinth)</span>
            </Link>
          </Button>
          <div className="w-full text-left mt-2">
            <div className="text-xs text-zinc-700 dark:text-zinc-300 mb-1">
              <span className="font-mono block">
                1. Velg nyeste versjon.
                <br />
                2. Under <span className="font-semibold">Assets</span>, velg{" "}
                <span className="font-semibold">bradpitt-smp.mrpack</span>.
              </span>
            </div>
            <div className="text-xs text-zinc-500">
              Importer filen i{" "}
              <a
                href="https://modrinth.com/app"
                className="underline hover:text-zinc-700 dark:hover:text-zinc-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Modrinth Modlauncher
              </a>
              .
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-2 bg-white/80 dark:bg-zinc-900/60 rounded-lg shadow p-5 border border-zinc-200 dark:border-zinc-800">
          <CopyInput value="mc.markusevanger.no" className="w-full" />
          <span className="text-xs text-zinc-500 mt-1 tracking-wide">
            Server IP-adresse
          </span>
        </div>
      </div>
    </div>
  );
}
