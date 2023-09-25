import { faBookAtlas, faCaravan, faHome, faHomeAlt, faHomeLgAlt, faHouse, faHouseChimney, faHouseChimneyWindow, faHouseCircleExclamation, faHouseCrack, faHouseDamage, faHouseFire, faHSquare, faL, faRssSquare, faSnowflake, faSwimmingPool } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { useState } from "react"
import Footer2 from "../component/footer2"
import Listings from "../component/listings"
import Navbar2 from "../component/navbar2"
import Sc from "../component/structurecomponent"
import { useContext } from "react"
import { Context } from "../provider/context"
import { useNavigate } from "react-router-dom"
import httpAuth from "../utils/http"

function Structure() {
    const navigate = useNavigate();
    const { propertyId } = useContext(Context)
    const [isFooterButtonEnabled, setIsFooterButtonEnabled] = useState(false);
    const [PlaceDescription, setPlaceDescription] = useState('')
    const [selected, setselected] = useState(null)
    const handleEnableFooterButton = (YourdName) => {

        if (PlaceDescription == YourdName) {
            setPlaceDescription("")

        }
        else {
            setPlaceDescription(YourdName)

        }


        console.log(PlaceDescription)
        setIsFooterButtonEnabled(true);

    };
    const setbordercolour = (y) => {
        return PlaceDescription === y ? "black" : ""
    }
    const setbackgroundcolour = (y) => {
        return PlaceDescription === y ? "#f7f7f7" : ""
    }

    const mybtn1Opacity = isFooterButtonEnabled ? 1 : 0.4;




    const uploadstucture = async (e) => {

        try {
            const response = await httpAuth.post(`http://localhost:5000/listing/updatepropertybyid/${propertyId}`, { PlaceDescription });
            navigate("/become-a-host/privacy-type")

        }
        catch (error) {
            console.log(error)
        }


    }

    return (
        <div className=" mt-24 2xl:mt-16 xl:mt-24">
            <Navbar2 />
            <div className="mb-24  mt-28">
                <div className=" xl:w-[705px] lg:w-[660px] md:w-[660px] sm:w-[560px] 2xl:w-[660px]  2xl:m-auto w-[380px] 2xl:pr-32 font-medium 2xl:p-7   p-3 xl:m-auto m-auto">
                    <h3 className="2xl:text-4xl text-2xl">Which of these best describes your place?</h3>
                </div>
                <div className=" 2xl:w-[660px]  xl:w-[660px] lg:w-[660px] md:w-[660px] sm:w-[560px]  w-[380px] m-auto flex flex-wrap  md:p-2 gap-x-2 gap-y-4  sm:p-2 p-2  ">
                    <Sc icon={faHouse} size="2x" DescName="House" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("House")} bgc={setbackgroundcolour("House")} />
                    <Sc icon={faSwimmingPool} size="2x" DescName="Swimming-pool" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("Swimming-pool")} bgc={setbackgroundcolour("Swimming-pool")} />
                    <Sc icon={faCaravan} size="2x" DescName="Lake" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("Lake")} bgc={setbackgroundcolour("Lake")} />
                    <Sc icon={faSnowflake} size="2x" DescName="cabin" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("cabin")} bgc={setbackgroundcolour("cabin")} />
                    <Sc icon={faBookAtlas} size="2x" DescName="castle" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("castle")} bgc={setbackgroundcolour("castle")} />
                    <Sc icon={faRssSquare} size="2x" DescName="beds&breakfast" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("beds&breakfast")} bgc={setbackgroundcolour("beds&breakfast")} />
                    <Sc icon={faHouseChimney} size="2x" DescName="swimming-pool" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("a")} />
                    <Sc icon={faBookAtlas} size="2x" desname="swimming-pool" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("b")} />
                    <Sc icon={faHouse} size="2x" desname="House" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("c")} />
                    <Sc icon={faSwimmingPool} size="2x" desname="Swimming-pool" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("d")} />
                    <Sc icon={faCaravan} size="2x" DescName="Lake" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("e")} />
                    <Sc icon={faSnowflake} size="2x" DescName="cabin" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("f")} />
                    <Sc icon={faBookAtlas} size="2x" DescName="castle" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("g")} />
                    <Sc icon={faRssSquare} size="2x" DescName="beds&breakfast" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("h")} />
                    <Sc icon={faHouseChimney} size="2x" desname="swimming-pool" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("i")} />
                    <Sc icon={faBookAtlas} size="2x" desname="swimming-pool" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("j")} />
                    <Sc icon={faBookAtlas} size="2x" desname="swimming-pool" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("k")} />
                    <Sc icon={faSnowflake} size="2x" desname="cabin" onGetDescName={handleEnableFooterButton} bdgc={setbordercolour("l")} />


                </div>
            </div>

            <div className=" fixed bottom-0 pt-2  w-full  bg-[rgb(221,221,221)]  " >
                <Footer2 link1="/become-a-host/aboutplace" onClick={uploadstucture} isEnabled={isFooterButtonEnabled} mybtn1Opacity={mybtn1Opacity} />


            </div>
        </div>
    )
}
export default Structure