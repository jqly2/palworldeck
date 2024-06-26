import SearchUIComponent from "./components/client/searchUI"
import PalCardComponent from "./components/client/palCard"
import Loading from "../ui/component/loading";
import {getPals} from "./components/server/deckServer"
import { Suspense } from "react";

function displayPalList(): Array<React.ReactNode> {
    const pals = getPals();
    const display: React.ReactNode[] = [];
    if (pals) {
        //Need to convert the objects to simple values to pass down to Client Component Card.
        pals.map((pal) => {
            display.push(
                <div className="flex justify-center items-center">
                    <PalCardComponent
                        key={pal.Name}
                        Name={pal.Name}
                        EnglishName={pal.Name_en}
                        HP={pal.HP}
                        Defense={pal.Defense}
                        ShotAttack={pal.ShotAttack}
                        ZukanIndex={pal.ZukanIndex}
                        ZukanIndexSuffix={pal.ZukanIndexSuffix}
                        ElementType1={pal.ElementType1}
                        ElementType2={pal.ElementType2}
                        WorkSuitability_EmitFlame={pal.WorkSuitability_EmitFlame}
                        WorkSuitability_Collection={pal.WorkSuitability_Collection}
                        WorkSuitability_Cool={pal.WorkSuitability_Cool}
                        WorkSuitability_Deforest={pal.WorkSuitability_Deforest}
                        WorkSuitability_GenerateElectricity={pal.WorkSuitability_GenerateElectricity}
                        WorkSuitability_Handcraft={pal.WorkSuitability_Handcraft}
                        WorkSuitability_Mining={pal.WorkSuitability_Mining}
                        WorkSuitability_MonsterFarm={pal.WorkSuitability_MonsterFarm}
                        WorkSuitability_ProductMedicine={pal.WorkSuitability_ProductMedicine}
                        WorkSuitability_Seeding={pal.WorkSuitability_Seeding}
                        WorkSuitability_Transport={pal.WorkSuitability_Transport}
                        WorkSuitability_Watering={pal.WorkSuitability_Watering}
                    />
                </div>

            )
        });
    }else{
        display.push(<p>Unable to retieve the pal list data. Please try again later.</p>)
    }
    return display
}


export default function Deck(): JSX.Element{

    return (
        <div id="deck-main" className="bg-gray-200 h-auto w-auto grow flex flex-col items-center justify-center">
            {/* <SearchUIComponent /> */}
            {/* <Loading /> */}
            <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-8 mb-8">
                <Suspense fallback={<Loading />}>
                    {displayPalList()}
                </Suspense>
            </div>
        </div>
    )

}