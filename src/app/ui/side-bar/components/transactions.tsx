"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import transactionsData from "./transactionData"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { handleReportFetch } from "@/app/call-api"

export default function Transactions() {
  const [selectedSpin, setSelectedSpin] = useState<string | null> (null);

  return (
    <Card className="bg-neutral-900 text-white border-0 sm:gap-0 md:gap-6 md:py-6 sm:py-3 md:pl-0 sm:pl-0 md:w-115 sm:w-68">
        <CardHeader className="font-bold text-yellow-500 md:text-3xl sm:pl-0">
        Transactions
        </CardHeader>

        <CardContent className="sm:pl-0 md:pl-5" >
        {transactionsData.map((group, idx) => {
            if (group.label === "Free Spin") {
            return (
                <Accordion type="single" collapsible key={idx} className="w-full md:pl-5 sm:pl-5">
                <AccordionItem value="freespin">
                    <AccordionTrigger className="font-semibold md:text-xl sm:text-xs sm:py-2">
                    {group.label}
                    </AccordionTrigger>
                    <AccordionContent className="pl-5 font-semibold md:text-base sm:text-xs">
                    <div className="md:h-24 sm:h-12 overflow-y-auto space-y-1">
                        {group.items.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {setSelectedSpin(item);  handleReportFetch();}}
                            className={cn(
                            "px-3 rounded cursor-pointer transition-colors md:py-2 sm:py-1",
                            selectedSpin === item
                                ? "bg-amber-200 text-amber-950"
                                : "bg-black hover:bg-neutral-900"
                            )}
                        >
                            {item}
                        </div>
                        ))}
                    </div>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            );
            }

            return (
            <div
                key={idx}
                onClick={() => setSelectedSpin(group.label)}
                className={cn(
                "rounded cursor-pointer transition-colors font-semibold pl-5 md:text-xl sm:text-xs md:py-2 sm:py-1",
                selectedSpin === group.label
                    ? "bg-amber-200 text-amber-950"
                    : "bg-neutral-900 hover:bg-neutral-800"
                )}
            >
                {group.label}
            </div>
            );
        })}
        </CardContent>
    </Card>
);

}
