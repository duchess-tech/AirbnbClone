import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useRef, useState } from "react";
import Footer2 from "../component/footer2";
import Navbar1 from "../component/navbar1";
import Navbar2 from "../component/navbar2";
import Navbar3 from "../component/navbar3";
import "../css/become-a-host.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import httpAuth from "../utils/http";
import { Context } from "../provider/context";

function PrivacyType(props) {
    const [TypeOfPlace, setTypeOfPlace] = useState("An entire place")
    const navigate = useNavigate();
    const { propertyId } = useContext(Context)


    const handleTypeOfPlace = (d) => {
        setTypeOfPlace(d)
        console.log(d)
    }
    const setbordercolour = (y) => {
        return TypeOfPlace === y ? "#000000" : ""
    }
    const setbackgroundcolour = (y) => {
        return TypeOfPlace === y ? "#f7f7f7" : ""
    }




    const uploadPrivacType = async (e) => {
        try {
            const response = await httpAuth.post(`http://localhost:5000/listing/updatepropertybyid/${propertyId}`, { TypeOfPlace });
            navigate("/become-a-host/floorplan")

        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="Pt-section">
            <Navbar3 />
            <div className="2xl:mt-32 2xl:mb-32 xl:mb-20 xl:mt-24 lg:mb-12 lg:mt-24  md:mb-12 md:mt-24 sm:mb-10 sm:mt-32 mb-8 mt-24 p-3  "  >
                <div className="w-full 2xl:w-[700px] xl:w-[700px] md:w-[700px] lg:w-[700px] sm:w-full m-auto pb-9   ">
                    <h3 className="text-4xl font-semibold ">What type of place will guests have?</h3>
                </div>
                <div className=" 2xl:w-[700px] xl:w-[700px] lg:w-[700px] md:w-[700px] sm:w-full  m-auto   "  >
                    <div style={{ backgroundColor: `${setbackgroundcolour("An entire place")}`, borderColor: `${setbordercolour("An entire place")}` }} className="w-full  p-3 h-24 rounded-xl items-center border-2 flex justify-between hover:border-[black] " onClick={() => handleTypeOfPlace('An entire place')}>
                        <div>
                            <h4 className="text-xl font-semibold">An entire place</h4>
                            <p>Guests have the whole place to themselves.</p>
                        </div>
                        <div><FontAwesomeIcon icon={faHome} size="2x" /></div>

                    </div>
                    <div style={{ backgroundColor: `${setbackgroundcolour("A private room")}`, borderColor: `${setbordercolour("A private room")}` }} className="w-full p-3 h-28 mt-2 rounded-xl items-center border-2 flex justify-between  hover:border-[black]  " onClick={() => handleTypeOfPlace("A private room")} >
                        <div>
                            <h4 className="text-xl font-semibold">A private room</h4>
                            <p>Guests sleep in a private room but some areas may be shared  with others.</p>
                        </div>
                        <div><FontAwesomeIcon icon={faHome} size="2x" /></div>

                    </div>
                    <div style={{ backgroundColor: `${setbackgroundcolour("A shared room")}`, borderColor: `${setbordercolour("A shared room")}` }} className="w-full p-3 h-28 mt-2 rounded-xl items-center border-2 flex justify-between  hover:border-[black] " onClick={() => handleTypeOfPlace('A shared room')}>
                        <div>
                            <h4 className="text-xl font-semibold">A shared room</h4>
                            <p>Guests sleep in a room or common area that may be shared with you or others</p>
                        </div>
                        <div><FontAwesomeIcon icon={faHome} size="2x" /></div>

                    </div>
                </div>
            </div>
            <div style={{ padding: "3px", background: "rgb(221, 221, 221)" }}>

            </div>
            <Footer2 isEnabled={true} link1='/become-a-host/structure' onClick={uploadPrivacType} />
        </div>
    )
} export default PrivacyType