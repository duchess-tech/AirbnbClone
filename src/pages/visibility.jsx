
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import Footer2 from "../component/footer2";
import Navbar3 from "../component/navbar3";
import "../css/become-a-host.css"
import { useNavigate } from "react-router-dom";
import httpAuth from "../utils/http";
import { useContext } from "react";
import { Context } from "../provider/context";

function Visibility(props) {
    const [whoToWelcome, setwhoToWelcome] = useState("Any Airbnb guest")
    const navigate = useNavigate();
    const { propertyId } = useContext(Context)

    const handlewhoToWelcome = (e) => {
        const { value } = e.target
        setwhoToWelcome(value)
    }
    useEffect(() => {
        console.log(whoToWelcome)
    }, [])

    const uploadVisibility = async (e) => {
        const visibility = whoToWelcome
        try {
            const response = await httpAuth.post(`http://localhost:5000/listing/updatepropertybyid/${propertyId}`, { visibility });
            navigate("/become-a-host/price")
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="Pt-section">
            <Navbar3 />
            <div className=" w-[650px] m-auto pt-44 bg-[#ffffff]"  >
                <div className="pr-9">
                    <h3 className="font-semibold text-4xl">Choose who to welcome for your first reservation</h3>
                    <p className="text-xl pt-4 pb-4 text-ash2">After your first guest, anyone can book your place. <span>Learn More</span></p>
                </div>
                <div className="mb-24 "  >
                    <div className=" w-[650px] h-[120px] p-4 gap-3 border flex rounded-xl " >
                        <input type="radio" value="Any Airbnb guest" checked={whoToWelcome === "Any Airbnb guest"} onChange={handlewhoToWelcome} className="h-6 w-6" />
                        <div className=" ">
                            <h4 className="text-xl font-semibold">Any Airbnb guest</h4>
                            <p className=" text-ash2">Get reservation faster when you welcome anybody from the Airbnb community.</p>
                        </div>

                    </div>
                    <div className="w-[650px] h-[120px] p-4 gap-3 border flex mt-2 rounded-xl ">
                        <input type="radio" value="An experienced guest" checked={whoToWelcome === "An experienced guest"} onChange={handlewhoToWelcome} className="h-6 w-6" />

                        <div className="">
                            <h4 className="text-xl font-semibold">An experienced guest</h4>
                            <p className=" text-ash2">For your first guest,welcome someone with a good track record on Airbnb who can offer tips on how to be a great host.</p>
                        </div>

                    </div>

                </div>
            </div>
            <div style={{ padding: "3px", background: "rgb(221, 221, 221)" }}>

            </div>
            <Footer2 isEnabled={true} link1='/become-a-host/finishedsetup' onClick={uploadVisibility} />
        </div>
    )
} export default Visibility