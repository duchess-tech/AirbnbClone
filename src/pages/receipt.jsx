
import { faCalendar, faCalendarCheck, faCalendarXmark, faCheckSquare, faHome, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer2 from "../component/footer2";
import Navbar3 from "../component/navbar3";
import "../css/become-a-host.css"
import { Context } from "../provider/context";
import httpAuth from "../utils/http";

function Receipt(props) {
    const [property, setProperty] = useState()
    const { propertyId } = useContext(Context)
    let isMounted = true;



    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await httpAuth.get(
                    `listing/findproperty/${propertyId}`,
                );
                console.log(response.data.property)
                setProperty(response.data.property);
                // setId(setpropertyId, "");
            }
            catch (error) {
                if (error.response.status == 401) {
                    setProperty({});
                    return;
                }
                // setloading(true);s
            }
        };

        if (isMounted) {
            fetchUser();
        }
        return () => {
            isMounted = false;
        };
    }, []);


    return (
        <div className="Pt-section">
            <Navbar3 />
            <div className="mt-28 mb-10 "  >
                <div className="w-1/2 m-auto ">
                    <h3 className="font-semibold text-6xl">Review your listing</h3>
                    <p className="text-xl font-semibold pt-3 pb-3 text-ash2">Here's what we'll show to guests. Make sure everything looks good.</p>
                </div>
                <div className=" w-1/2 flex m-auto gap-x-4 pb-3 pt-3">

                    <div className="w-[400px] rounded-xl shadow-md  h-[400px] border border-black p-3 ">
                        <div className="relative">
                            <img src={property?.photos[0]} alt="" />
                            <button className="absolute top-[10px] w-[120px] left-[30px]  rounded-lg bg-[#ffffff]">show preview</button>
                        </div>


                        <div className="mt-4">
                            <h5 className="text-lg">${property?.PropertyTitle}oooo</h5>
                            <p className="text-lg ">
                                <b>${property?.price}</b>
                                <span className="fw-light">night</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[600px]  h-[400px] p-12">
                        <h3 className="text-2xl">What's next?</h3>
                        <div className="mt-9 ">

                            <div className="flex gap-4">
                                <FontAwesomeIcon icon={faCheckSquare} size="2x" />
                                <div>
                                    <h2 className="text-xl font-semibold">Confirm a few details and publish</h2>
                                    <p className="text-ash2">We'll let you know if you need to verify your identity or register with the local government.</p>
                                </div>

                            </div><div className="flex gap-4 mt-4 ">
                                <FontAwesomeIcon icon={faCalendar} size="2x" />
                                <div>
                                    <h2 className="text-xl font-semibold">Set up your calendar</h2>
                                    <p className="text-ash2">Choose which dates your listing is available. It will be visible 24 hours after you publish.</p>
                                </div>

                            </div><div className="flex gap-4 mt-4 ">
                                <FontAwesomeIcon icon={faPen} size="2x" />
                                <div>
                                    <h2 className="text-xl font-semibold">Adjust your settings</h2>
                                    <p className="text-ash2"> Set house rules, select a cancellation policy, choose how guests book, and more.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>



            </div>
            <div style={{ padding: "3px", background: "rgb(221, 221, 221)" }}></div>
            <Footer2 isEnabled={true} link1='/become-a-host/discount' link2="/become-a-host/public-celebration" />
        </div >
    )
} export default Receipt