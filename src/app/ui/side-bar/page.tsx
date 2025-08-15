import { Card, CardContent,CardHeader,CardTitle } from "@/components/ui/card";
import gameTitle from "./components/gameTitle";
import roundDetails from "./components/roundDetailsData";
import Transactions from "./components/transactions";
import { Separator } from "@radix-ui/react-select";
import RoundDetails from "./components/round-details";

export default function Sidebar(){
    return(
        <Card className= " bg-neutral-900 text-white border-0 lg:h-full lg:w-130 sm:w-80 gap-0">
            <CardHeader className="text-center">
                <CardTitle className="text-yellow-500 font-bold tracking-normal lg:text-7xl lg:pt-8 sm:text-4xl sm:pt-0 border-0">
                    {gameTitle.title}    
                </CardTitle>
                <p className=" leading-none border-0 m-0 font-bold lg:text-3xl sm:text-xl sm:pt-0">{gameTitle.subTitle}</p>
            </CardHeader>
            <CardContent>           
                    <RoundDetails/>         
                    <Transactions/>  
            </CardContent>
        </Card>
    );
}