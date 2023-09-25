
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer2 from "../component/footer2";
import Navbar3 from "../component/navbar3";
import "../css/become-a-host.css"

function Discount(props) {


    return (
        <div className="Pt-section">
            <Navbar3 />
            <div className="mt-40 mb-10 "  >
                <div className="w-[650px] m-auto ">
                    <h3 className="font-semibold text-4xl">Add discounts</h3>
                    <p className="text-xl pt-3 pb-3">Help your place stand out to get booked faster and earn your first reviews.</p>
                </div>
                <div className="m-auto w-[650px] p-4 rounded-xl h-[100px] border bg-[#f7f7f7]  flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <h2 className="text-lg font-bold ">20%</h2>
                        <div>
                            <h3 >
                                New listing promotion
                            </h3>
                            <p>  Offer 20%   off your first 3 bookings</p>
                        </div>
                    </div>
                    <input type="checkbox" className="w-8 h-8 " />
                </div>
                <div className="m-auto w-[650px] p-4 rounded-xl h-[100px] border bg-[#f7f7f7]  mt-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div className="w-12 h-10 border rounded-md text-lg font-bold text-center bg-[#ffffff]">5%</div>
                        <div>
                            <h3 >
                                Weekly discount
                            </h3>
                            <p> For stays of 7 nights or more</p>
                        </div>
                    </div>

                    <input type="checkbox" className="w-8 h-8 " />

                </div>  <div className="m-auto w-[650px] p-4 rounded-xl h-[100px] border bg-[#f7f7f7] mt-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div className="w-12 h-10 border rounded-md text-lg font-bold text-center bg-[#ffffff] ">10%</div>
                        <div>
                            <h3 >
                                Monthly discount
                            </h3>
                            <p>For stays of 28 nights or more</p>
                        </div>
                    </div>
                    <input type="checkbox" className="w-8 h-8 " />

                </div>
                <p className="text-center text-sm mt-3">Only one discount will be applied per stay.Learn more</p>

            </div>
            <div style={{ padding: "3px", background: "rgb(221, 221, 221)" }}>

            </div>
            <Footer2 isEnabled={true} link1='/become-a-host/price' link2="/become-a-host/legal" />
        </div >
    )
} export default Discount