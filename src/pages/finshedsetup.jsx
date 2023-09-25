import Footer2 from "../component/footer2";
import Navbar1 from "../component/navbar1";
import Navbar2 from "../component/navbar2";
import Navbar3 from "../component/navbar3";

function FinishedSetup() {
    return (

        <section className="telsec ">

            <div style={{ backgroundColor: "white" }}>
                <Navbar2 />



                <div className=" bg-[#ffffff] mt-20 mb-24 flex 2xl:flex-row 
                 2xl:mt-32 2xl:mb-20 2xl:pr-44 2xl:pl-56 flex-col-reverse mt-12  flex-wrap   lg:flex lg:mt-32  lg:mb-12   xl:flex xl:mt-24  items-center lg:pl-16 lg:mb-0 lg:pr-16 lg:flex-row xl:flex-row ">
                    <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 p-3 md:w-full  sm:p-3" >
                        <p className="text-xl font-medium">step 3</p>
                        <h2 className="text-5xl mt-2 font-medium">
                            Finish up and publish

                        </h2>
                        <p className="text-xl mt-4">
                            Finally, you'll choose if you'd like to start with an experienced guest, then you'll set your nightly price. Answer a few quick questions and publish when you're ready.

                        </p>
                    </div>






                    <div className="w-full  border-0  2xl:w-2/4 xl:w-2/4 lg:w-2/4  ">
                        <div className=" flex justify-center items-center ml-9">
                            <video className="video" crossOrigin="anonymous" playsInline="" preload="auto" style={{ objectFit: "cover" }} src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high" autoPlay muted>
                            </video>

                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: "3px", background: "rgb(221, 221, 221)" }}>
            </div>
            <Footer2 isEnabled={true} link1="/become-a-host/description"
                link2="/become-a-host/visibility" />
        </section>
    )
}
export default FinishedSetup