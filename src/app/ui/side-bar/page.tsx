import { Card, CardContent,CardHeader,CardTitle } from "@/components/ui/card";
import gameTitle from "./components/gameTitle";
import roundDetails from "./components/roundDetailsData";
import Transactions from "./components/transactions";
import { Separator } from "@radix-ui/react-select";
import RoundDetails from "./components/round-details";

export default function Sidebar(){
    return(
        <Card className= " bg-neutral-900 text-white border-0 md:h-full md:w-120 w-55 gap-0">
            <CardHeader className="text-center md:gap-2 gap-0">
                <CardTitle className="text-yellow-500 font-bold tracking-normal md:text-7xl md:pt-8 text-3xl pt-0">
                    {gameTitle.title}    
                </CardTitle>
                <p className=" leading-none m-0 font-bold md:text-3xl text-md pt-0">
                    {gameTitle.subTitle}
                </p>
            </CardHeader>
            <CardContent>           
                    <RoundDetails/>         
                    <Transactions/>  
            </CardContent>
        </Card>
    );
}