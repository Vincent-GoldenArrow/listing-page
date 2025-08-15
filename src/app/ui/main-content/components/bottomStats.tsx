import { Card, CardContent } from "@/components/ui/card";
import WinPagination from "./pagination";
import { win } from "./balanceData";

export default function BottomStats(){
    return(   
        <Card className="bg-neutral-900 border-yellow-500 border-2 text-white rounded-3xl w-300 flex">
          <CardContent className="items-center flex justify-between">
                <div className="text-left">
                    <p className="md:text-3xl font-bold text-yellow-500">{win.label}</p> 
                    <p className="md:text-4xl font-bold">{win.amount}</p>
                </div>
                <div>
                    <WinPagination/>
                </div>
          </CardContent>
        </Card>
    );
}