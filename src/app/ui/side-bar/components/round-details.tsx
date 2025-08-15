"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import roundDetails from "./roundDetailsData"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RoundDetails() {
  return (
    <Card className="bg-neutral-900 text-white border-0 flex md:mt-10 md:w-115 md:gap-6 md:py-6 mt-0 gap-0  pt-6 pl-0  w-68">
                    <CardHeader className="font-bold text-yellow-500 lg:text-3xl sm:pl-0 ">
                        Round Details
                    </CardHeader>
                    <CardContent className="lg:pl-10 sm:pl-5 flex justify-between">
                        <div className="font-semibold md:space-y-3 sm:space-y-1 sm:text-xs md:text-xl sm:width-20">
                            <p>{roundDetails.details[0][0].field}</p>
                            <p>{roundDetails.details[1][0].field}</p>
                            <p>{roundDetails.details[2][0].field}</p>
                            <p>{roundDetails.details[3][0].field}</p>
                            <p>{roundDetails.details[4][0].field}</p>
                        </div>

                        <div className="font-normal flex-col md:text-xl md:space-y-3 sm:space-y-1  sm:text-xs">
                            <p>{roundDetails.details[0][0].content}</p>
                            <p>{roundDetails.details[1][0].content}</p>
                            <p>{roundDetails.details[2][0].content}</p>
                            <p>{roundDetails.details[3][0].content}</p>
                            <p>{roundDetails.details[4][0].content}</p>
                        </div>                                                                           
                    </CardContent>
        </Card>
  )
}
