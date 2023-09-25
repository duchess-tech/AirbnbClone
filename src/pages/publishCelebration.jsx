import { useContext, useEffect } from "react";
import { Context } from "../provider/context";
import httpAuth from "../utils/http";
import { Link } from "react-router-dom"


function PublicCelebration() {
    const { setUser, user } = useContext(Context)


    let isMounted = true;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await httpAuth.get("/user/getuser");
                setUser(response.data.user);
            } catch (error) {
                if (error.response.status == 401) {
                    return;
                }
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
        <>


            <section className=" flex  text-[#ffffff]">
                <div className="w-full  h-screen overflow-hidden  bg-[#000000]">
                    <img
                        src="https://ef6vv97s4m7.exactdn.com/wp-content/uploads/2022/03/Airbnb-Photo-68.jpg?lossy=1&ssl=1"
                        alt=""
                        style={{ width: "100%", height: "100%", }}
                    />
                </div>

                <div className="w-full  h-screen overflow-hidden bg-[#000000] flex flex-wrap justify-center p-8">
                    <div className="mt-[220px]  w-3/4 h-2/4  ">
                        <h1 className="text-6xl">Congratulations, {user?.lastname}</h1>
                        <p className=" mt-9 text-lg">
                            From one Host to another—welcome aboard. Thank you for sharing your home and helping to create incredible experiences for our guests.
                        </p>

                        <h2 className=" mt-20 text-lg">Esther odedoyin</h2>
                    </div>



                    <div className="mt-6 w-full flex justify-end ">
                        <button className="bg-[#EF1D7C] rounded-lg w-[200px]">

                            <Link to="/manage-your-space">
                                Let's get started
                            </Link>
                        </button>
                    </div>
                </div>




            </section>
        </>

    )

}
export default PublicCelebration