import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TopStats from "./components/topStats";
import ReelSymbols from "./components/reelSymbols";
import BottomStats from "./components/bottomStats";
import { WinningSymbols } from "./components/winningSymbols";

export default function MainContent(){
    return(
        <Card className="bg-neutral-900 border-0">
            <CardContent >
                <TopStats/>
            </CardContent>
            <CardContent className="flex justify-between">
                <div></div>
                <div><ReelSymbols/></div>
                <WinningSymbols/> 
            </CardContent>
            <CardContent >
                <BottomStats/>
            </CardContent>
        </Card>
    
    );
}
