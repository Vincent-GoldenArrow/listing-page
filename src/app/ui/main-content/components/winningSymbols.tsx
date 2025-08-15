import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function SymbolCard() {
  return (
    <CardContent className="bg-black border-gray-600 border-2 rounded-sm h-35 flex flex-col items-center justify-center gap-2">
      <div className="flex items-center text-2xl font-semibold gap-2">
        <Image
          className="max-w-[90%] lg:max-w-full"
          src="/symbols/symbol_a.png"
          alt="ais gaming"
          width={50}
          height={50}
        />
        <p>x4</p>
      </div>
      <Separator className="w-full" />
      <div className="text-center">
        <p className="text-yellow-400 font-medium">Payout:</p>
        <p className="font-semibold text-2xl">70,000</p>
      </div>
    </CardContent>
  );
}

export function WinningSymbols() {
  return (
    <Card className="bg-neutral-900 border-yellow-500 border-2 rounded-xl text-white">
      <CardContent className="flex flex-col items-center justify-between h-full pr-4 pl-4">
        
        {/* Top button */}
        <Button variant="ghost" className="p-0 hover:bg-transparent" onClick={() => console.log("clicked!")}>
          <Image
            className="max-w-[90%] lg:max-w-full -rotate-90"
            src="/arrow-white.png"
            alt="arrow up"
            width={50}
            height={50}
          />
        </Button>

        {/* Middle symbols */}
        <div className="flex flex-col gap-4 flex-grow justify-center w-full">
          <SymbolCard />
          <SymbolCard />
        </div>

        {/* Bottom button */}
        <Button variant="ghost" className="p-0 hover:bg-transparent">
          <Image
            className="max-w-[90%] lg:max-w-full rotate-90"
            src="/arrow-white.png"
            alt="arrow down"
            width={50}
            height={50}
          />
        </Button>
      </CardContent>
    </Card>
  );
}
