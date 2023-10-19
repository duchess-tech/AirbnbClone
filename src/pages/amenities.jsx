
import { faCab, faFireExtinguisher, faFirstAid, faG, faKitchenSet, faSmokingBan, faStop, faStopCircle, faStroopwafel, faTv, faWifi } from "@fortawesome/free-solid-svg-icons"
import Navbar2 from "../component/navbar2"
import Sc from "../component/structurecomponent"
import { FcAlarmClock } from 'react-icons/fc';
import { BiAlarmExclamation } from 'react-icons/bi';
import Footer2 from "../component/footer2";
import "../css/become-a-host.css"
import Navbar1 from "../component/navbar1";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import httpAuth from "../utils/http";
import { Context } from "../provider/context";
import { useNavigate } from "react-router-dom";

function Amenities() {
    const [Amenities, setAmenities] = useState([])
    const navigate = useNavigate();
    const { propertyId } = useContext(Context)
    const handleAmenities = (YourdName) => {
        if (!Amenities.includes(YourdName)) {
            setAmenities([...Amenities, YourdName])

            console.log(Amenities)
        }
        else {
            setAmenities([...Amenities.filter((amenities) => amenities !== YourdName)])
            console.log(Amenities)

        }

    }
    const uploadamenities = async (e) => {

        try {
            await httpAuth.post(`https://airbnclone-backend10.onrender.com/listing/updatepropertybyid/${propertyId}`, { Amenities })
            navigate("/become-a-host/photos");
        }

        catch (error) {
            console.error("error sending data")
        }
    }

    return (
        <div>
            <Navbar1 />

            <div className="2xl:mt-40 xl:mt-28  lg:mt-28 md:mt-28 sm:mt-28 mt-28">
                <div className="2xl:w-[660px] w-[400px]  md:w-[660px]  sm:w-[560px] m-auto pb-6 pl-2">
                    <h2 className="text-3xl" >
                        Tell guest what your place has to offer</h2>
                    <p className="text-xl text-ash2">You can add more amenities after you publish your listing.</p>
                </div>
                <div className="2xl:w-[660px]   xl:w-[660px] lg:w-[660px] md:w-[660px] sm:w-[560px] w-[400px] m-auto flex flex-wrap justify-between  md:p-2 gap-y-4  sm:p-2 p-2 2xl:p-0   ">
                    <Sc icon={faWifi} DescName="Wifi" onGetDescName={handleAmenities} bdgc={Amenities.includes("Wifi") ? "black" : ""} bgc={Amenities.includes("Wifi") ? "#f7f7f7" : ""} />
                    <Sc icon={faTv} DescName="Tv" onGetDescName={handleAmenities} bdgc={Amenities.includes("Tv") ? "black" : ""} bgc={Amenities.includes("Tv") ? "#f7f7f7" : ""} />
                    <Sc icon={faKitchenSet} onGetDescName={handleAmenities} DescName="Kitchen" bdgc={Amenities.includes("Kitchen") ? "black" : ""} bgc={Amenities.includes('Kitchen') ? "#f7f7f7" : ""} />
                    <Sc icon={faCab} DescName="Washer" onGetDescName={handleAmenities} bdgc={Amenities.includes("Washer") ? "black" : ""} bgc={Amenities.includes("Washer") ? "#f7f7f7" : ""} />
                    <Sc icon={faCab} DescName="Free parking on premises" onGetDescName={handleAmenities} bdgc={Amenities.includes("Free parking on premises") ? "black" : ""} bgc={Amenities.includes("Free parking on premises") ? "#f7f7f7" : ""} />
                    <Sc icon={faCab} DescName="paid parking on premises" onGetDescName={handleAmenities} bdgc={Amenities.includes("paid parking on premises") ? "black" : ""} bgc={Amenities.includes("paid parking on premises") ? "#f7f7f7" : ""} />
                    <Sc icon={faCab} DescName="Air conditioning" onGetDescName={handleAmenities} bdgc={Amenities.includes("Air conditioning") ? "black" : ""} bgc={Amenities.includes("Air conditioning") ? "#f7f7f7" : ""} />
                    <Sc icon={faCab} DescName="Dedicated work space" onGetDescName={handleAmenities} bdgc={Amenities.includes("Dedicated work space") ? "black" : ""} bgc={Amenities.includes("Dedicated work space") ? "#f7f7f7" : ""} />
                </div>

                <div>
                    <div className="2xl:w-[660px] w-[400px]  md:w-[660px] m-auto pt-6 pb-2 pl-2">
                        <p className="text-xl"> Do you have any standout amenities?</p>

                    </div>
                    <div className=" 2xl:w-[660px]  xl:w-[660px] lg:w-[660px] md:w-[660px] sm:w-[560px] w-[400px] justify-between m-auto flex flex-wrap  md:p-2 gap-x-2 gap-y-4  sm:p-2 p-2  ">
                        <Sc size="2x" icon={faCab} DescName="Pool" onGetDescName={handleAmenities} bdgc={Amenities.includes("Pool") ? "black" : ""} bgc={Amenities.includes("Pool") ? "#f7f7f7" : ""} />
                        <Sc size="2x" icon={faTv} DescName="Hot tub" onGetDescName={handleAmenities} bdgc={Amenities.includes("Hot tub") ? "black" : ""} bgc={Amenities.includes("Hot tub") ? "#f7f7f7" : ""} />
                        <Sc size="2x" icon={faKitchenSet} DescName="patio" onGetDescName={handleAmenities} bdgc={Amenities.includes("patio") ? "black" : ""} bgc={Amenities.includes("patio") ? "#f7f7f7" : ""} />
                        <Sc size="2x" icon={faCab} DescName="BBQ grill" onGetDescName={handleAmenities} bdgc={Amenities.includes("BBQ grill") ? "black" : ""} bgc={Amenities.includes("BBQ grill") ? "#f7f7f7" : ""} />
                        <Sc size="2x" icon={faCab} DescName="Fire pit" onGetDescName={handleAmenities} bdgc={Amenities.includes("Fire pit") ? "black" : ""} bgc={Amenities.includes("Fire pit") ? "#f7f7f7" : ""} />
                        <Sc size="2x" icon={faCab} DescName="pool table" onGetDescName={handleAmenities} bdgc={Amenities.includes("pool table") ? "black" : ""} bgc={Amenities.includes("pool table") ? "#f7f7f7" : ""} />
                        <Sc size="2x" icon={faCab} DescName="Piano" onGetDescName={handleAmenities} bdgc={Amenities.includes("Piano") ? "black" : ""} bgc={Amenities.includes("Piano") ? "#f7f7f7" : ""} />
                        <Sc size="2x" icon={faCab} DescName="outdoor shower" onGetDescName={handleAmenities} bdgc={Amenities.includes("outdoor shower") ? "black" : ""} bgc={Amenities.includes("outdoor shower") ? "#f7f7f7" : ""} />
                    </div>

                </div>

                <div className="safety-items">
                    <div className="2xl:w-[660px] w-[400px]  md:w-[660px] m-auto pt-6 pb-2 pl-2">
                        <p className="text-xl">Do you have any of these safety items? </p>

                    </div>
                    <div className=" 2xl:w-[660px]   xl:w-[660px] lg:w-[660px] md:w-[660px] sm:w-[560px]  w-[400px] justify-between  m-auto flex flex-wrap  md:p-2 gap-x-2 gap-y-4  sm:p-2 p-2  ">
                        <Sc icon={faSmokingBan} size="2x" DescName="Smoke alarm" onGetDescName={handleAmenities} bdgc={Amenities.includes("Smoke alarm") ? "black" : ""} bgc={Amenities.includes("Smoke alarm") ? "#f7f7f7" : ""} />
                        <Sc icon={faFirstAid} size="2x" DescName="First aid kit" onGetDescName={handleAmenities} bdgc={Amenities.includes("First aid kit") ? "black" : ""} bgc={Amenities.includes("First aid kit") ? "#f7f7f7" : ""} />
                        <Sc icon={faFireExtinguisher} size="2x" DescName="fire extenguisher" onGetDescName={handleAmenities} bdgc={Amenities.includes("fire extenguisher") ? "black" : ""} bgc={Amenities.includes("fire extenguisher") ? "#f7f7f7" : ""} />
                        <Sc size="2x" icon={faCab} DescName="Carbon monoxide alarm" onGetDescName={handleAmenities} bdgc={Amenities.includes("Carbon monoxide alarm") ? "black" : ""} bgc={Amenities.includes("Carbon monoxide alarm") ? "#f7f7f7" : ""} />

                    </div>

                </div>

            </div>
            <div className=" fixed bottom-0 pt-2  w-full  bg-[rgb(221,221,221)]  " >
                <Footer2 link1="/become-a-host/standout" isEnabled={true} onClick={uploadamenities} />


            </div>
        </div>
    )
}
export default Amenities