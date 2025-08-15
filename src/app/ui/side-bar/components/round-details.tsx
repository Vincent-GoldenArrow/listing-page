"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import roundDetails from "./roundDetailsData"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RoundDetails() {
  return (
    <Card className="bg-neutral-900 text-white border-0 flex lg:mt-10 sm:mt-0 sm:gap-0 lg:gap-6 lg:py-6 sm:py-0 lg:pl-5 sm:pl-0">
                    <CardHeader className="font-bold text-yellow-500 lg:text-3xl sm:pl-0 ">
                        Round Details
                    </CardHeader>
                    <CardContent className="lg:pl-15 sm:pl-5 flex justify-between">
                        <div className="font-semibold lg:space-y-3 sm:space-y-1 sm:text-xs lg:text-xl sm:width-20">
                            <p>{roundDetails.details[0][0].field}</p>
                            <p>{roundDetails.details[1][0].field}</p>
                            <p>{roundDetails.details[2][0].field}</p>
                            <p>{roundDetails.details[3][0].field}</p>
                            <p>{roundDetails.details[4][0].field}</p>
                        </div>

                        <div className="font-normal flex-col lg:text-xl lg:space-y-3 sm:space-y-1  sm:text-xs">
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
