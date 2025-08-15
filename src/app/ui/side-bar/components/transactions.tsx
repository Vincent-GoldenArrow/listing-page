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
    <Card className="bg-neutral-900 text-white border-0 sm:gap-0 lg:gap-6 lg:py-6 sm:py-0 lg:pl-5 sm:pl-0">
        <CardHeader className="font-bold text-yellow-500 lg:text-3xl sm:pl-0">
        Transactions
        </CardHeader>

        <CardContent className="">
        {transactionsData.map((group, idx) => {
            if (group.label === "Free Spin") {
            return (
                <Accordion type="single" collapsible key={idx} className="w-full lg:pl-9 sm:pl-0">
                <AccordionItem value="freespin">
                    <AccordionTrigger className="font-semibold lg:text-xl sm:text-xs">
                    {group.label}
                    </AccordionTrigger>
                    <AccordionContent className="pl-5 text-base font-semibold">
                    <div className="max-h-32 overflow-y-auto space-y-2">
                        {group.items.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {setSelectedSpin(item);  handleReportFetch();}}
                            className={cn(
                            "px-3 py-2 rounded cursor-pointer transition-colors",
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
                "py-2 rounded cursor-pointer transition-colors font-semibold lg:pl-9 sm:pl-0 lg:text-xl sm:text-xs  ",
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
