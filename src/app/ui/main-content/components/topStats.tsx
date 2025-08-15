import { Card, CardContent } from "@/components/ui/card";
import { totalWin, totalStake } from "./balanceData";

export default function TopStats(){
    return(   
        <Card className="bg-neutral-900 border-yellow-500 border-2 text-white rounded-3xl w-300 flex">
          <CardContent className="items-center flex justify-between">
                <div className="text-left">
                <p className="text-3xl font-bold text-yellow-500">{totalWin.label}</p> 
                    <p className="text-4xl font-bold">{totalWin.amount}</p>
                </div>
                <div className="text-right">
                    <p className="text-3xl font-bold text-yellow-500">{totalStake.label}</p>
                    <p className="text-4xl font-bold">{totalStake.amount}</p>
                </div>
          </CardContent>
        </Card>
    );
}