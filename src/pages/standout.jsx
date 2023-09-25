import { Link } from "react-router-dom"
import Footer2 from "../component/footer2"
import Navbar3 from "../component/navbar3"
import Defaultnav1 from "../layouts/defaultnav1"
import '../css/listingpage.css'
import Navbar2 from "../component/navbar2"


function Standout(props) {

    return (


        <section className="telsec ">

            <div style={{ backgroundColor: "white" }}>
                <Navbar2 />
                <div className=" bg-[#ffffff] mt-20 mb-24 flex 2xl:flex-row 
                 2xl:mt-32 2xl:pr-44 2xl:pl-56 flex-col-reverse mt-12  flex-wrap   lg:flex lg:mt-32  lg:mb-12   xl:flex xl:mt-24  items-center lg:pl-16 lg:mb-0 lg:pr-16 lg:flex-row xl:flex-row ">
                    <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 p-3 md:w-full  sm:p-3" >
                        <p className="text-xl font-medium">step 2</p>
                        <h2 className="text-5xl mt-2 font-medium">
                            Make your place stand out

                        </h2>
                        <p className="text-xl mt-4">
                            In this step, you'll add some of the amenities your place offers, plus 5 or more photos. Then, you'll create a title and description.</p>
                    </div>

                    <div className="w-full  border-0  2xl:w-2/4 xl:w-2/4 lg:w-2/4 ">
                        <div className="flex justify-center items-center ml-9">

                            <video className="video" crossOrigin="anonymous" playsInline="" preload="auto" style={{ objectFit: "cover" }} src="https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high" typeof="video/mp4" autoPlay muted>

                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: "3px", background: "rgb(221, 221, 221)" }}>
            </div>
            <Footer2 isEnabled={true} link1="/become-a-host/floorplan"
                link2="/become-a-host/amenities" />
        </section>


    )
}
export default Standout