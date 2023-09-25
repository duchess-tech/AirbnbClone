import { useNavigate } from "react-router-dom"
import Footer2 from "../component/footer2"
import Navbar3 from "../component/navbar3"
import '../css/listingpage.css'
import httpAuth from "../utils/http";
import { useContext } from "react";
import { Context } from "../provider/context";
import { handle_SetpropId } from "../utils/localstorage";


function Aboutplace() {
    const navigate = useNavigate();
    const { setpropertyId } = useContext(Context)
    const createPropertyId = async () => {
        try {
            const response = await httpAuth.post("/listing/propertyid");
            const propertyId = response.data.propertyId
            handle_SetpropId(propertyId)
            setpropertyId(propertyId)
            navigate('/become-a-host/structure')

        }
        catch (error) {
            console.log(error)
        }
    };


    return (


        <section>

            <div className="bg-[rgb(221,221,221)] ">
                <Navbar3 />

                <div className=" bg-[#ffffff] mt-20 mb-24 flex 2xl:flex-row 
                 2xl:mt-32 2xl:pr-44 2xl:pl-56 flex-col-reverse mt-12  flex-wrap   lg:flex lg:mt-32  lg:mb-12   xl:flex xl:mt-24  items-center lg:pl-16 lg:mb-0 lg:pr-16 lg:flex-row xl:flex-row ">
                    <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 p-3 md:w-full  sm:p-3" >
                        <p className="text-xl font-medium">step 1</p>
                        <h2 className="text-5xl mt-2 font-medium">
                            Tell us about your place
                        </h2>
                        <p className="text-xl mt-4">In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p>
                    </div>


                    <div className="w-full  border-0  2xl:w-2/4 xl:w-2/4 lg:w-2/4  ">
                        <div className=" flex justify-center items-center ml-9">
                            <video typeof="video/mp4" src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high" crossOrigin="anonymous" playsInline preload="auto" style={{ objectFit: "cover" }} autoPlay muted></video>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" fixed bottom-0 pt-2  w-full  bg-[rgb(221,221,221)]  " >
                <Footer2 link1="/become-a-host/overview" isEnabled={true} onClick={createPropertyId} />


            </div>


        </section>


    )
}
export default Aboutplace