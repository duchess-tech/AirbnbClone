
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer2 from "../component/footer2";
import Navbar3 from "../component/navbar3";
import "../css/become-a-host.css"
import axios from "axios";
import httpAuth from "../utils/http";
import { Context } from "../provider/context";

function price(props) {
    const [price, setprice] = useState(10)
    const { propertyId } = useContext(Context)
    const navigate = useNavigate()







    const handlepriceIncrease = () => {
        if (price >= 10) {
            setprice((prevprice) => prevprice + 5)

        }
    }
    const handlepriceDecrease = () => {
        if (price > 10) {
            setprice((prevprice) => prevprice - 5)

        }
    }




    const uploadPrice = async (e) => {

        try {
            await httpAuth.post(`/listing/updatepropertybyid/${propertyId}`, { price })
            navigate("/become-a-host/discount");
        }

        catch (error) {
            console.error("error sending data")
        }
    }





    return (
        <div className="Pt-section">
            <Navbar3 />
            <div className="mt-52 mb-28 "  >
                <div className="w-[650px] m-auto ">
                    <h3 className="font-semibold text-3xl">Now, set your price</h3>
                    <p className="text-xl pt-3 pb-3">You can change it anytime.</p>
                </div>
                <div className="m-auto w-[650px] p-4 rounded-xl h-[280px] border bg-[#f7f7f7] ">

                    <div className="flex justify-between items-center  border-black  p-2 rounded-xl "  >
                        <button onClick={handlepriceDecrease} className="w-12 h-12 
                        bg-[#ffffff] rounded-full border border-black text-2xl">
                            -
                        </button>
                        <div className="w-[450px] h-24 rounded-xl border border-black  bg-[#ffffff]  flex justify-center items-center">
                            <span className="text-6xl font-medium">${price}</span>
                        </div>
                        <button onClick={handlepriceIncrease} className="w-12 h-12 rounded-full bg-[#ffffff] border border-black text-2xl">
                            +
                        </button>
                    </div>
                    <p className="text-center text-xl">per night</p>
                    <div className="text-center pl-32 pr-32 m-auto pt-3 text-xl">Places like yours in your area usually range from $38 to $63</div>
                </div>


            </div>
            <div style={{ padding: "3px", background: "rgb(221, 221, 221)" }}>

            </div>
            <Footer2 onClick={uploadPrice} isEnabled={true} link1='/become-a-host/visibility' />
        </div >
    )
} export default price