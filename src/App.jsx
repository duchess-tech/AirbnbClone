import "./css/nav.css"
import { useContext, useEffect } from "react";
import { useState } from "react";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import httpAuth from "./utils/http";
import { Carousel } from "@material-tailwind/react";
import { Context } from "./provider/context";
import Modal from "./component/modal";
import SignupModal from "./component/modal2";
import ConfirmEmail from "./component/modal3";
import shuffleArray from "./utils/shuffledata";
import Register from "./component/modal4";




function Home() {
    const { showLogin, showEmailOtp, showRegister } = useContext(Context)
    const [properties, setProperties] = useState([])
    const [Category, setCategory] = useState([])
    const [loading, setloading] = useState(false)
    const [modal, setModal] = useState("true")
    let isMounted = true;
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setModal(true)
    }, [])

    useEffect(() => {
        setIsActive(true);

    }, [Category]);


    const HandleCategory = async (param) => {
        setIsActive(false)
        try {
            const response = await httpAuth.get(`https://airbnclone-backend.onrender.com/category/getcategories?placeDescription=${param}`)
            setCategory([...response.data.category]);
            setTimeout(() => {
                setIsActive(true);
            }, 5000);

        } catch (error) {
            setCategory([]);
        }
    };



    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await httpAuth.get(`property/getallproperties`);
                setCategory(response.data.properties);
                // localStorage.setItem("loggedIn", JSON.stringify(true));
            }
            catch (error) {
                setloading(true);
            }
        };
        if (isMounted) {
            fetchProperties();
        }
        return () => {
            isMounted = false;
        };
    }, []);




    const slideInStyles = {
        position: 'relative',
        left: isActive ? '0px' : '-100%',
        transition: 'left 2s ease-in'
    };



    return (
        <div>
            {modal && <Modal />}
            <Navbar HandleCategory={HandleCategory} />
            {
                showLogin && <SignupModal />

            }

            {showEmailOtp &&
                <ConfirmEmail />
            }
            {
                showRegister && <Register />
            }



            <main className="p-8 flex gap-x-8  gap-y-12  flex-wrap  "  >

                {Category.length > 0 ? (shuffleArray(Category)?.map((items, index) => (
                    <>
                        <div key={index} className=" justify-start" style={slideInStyles} >
                            <Carousel className=" rounded-xl w-[350px] h-[300px]   overflow-hidden" showThumbs={false}
                                autoPlay
                                infiniteLoop
                                interval={1000}
                                stopOnHover>
                                <div className="position-relative border ">
                                    <img
                                        src={items?.photos[0]}
                                        alt="image 1"
                                        className="h-[300px] w-full object-cover"
                                    />

                                </div>
                                <div className=" position-relative  border   ">
                                    <img
                                        src={items?.photos[1]}
                                        alt="image 2"
                                        className="h-[300px] w-full object-cover"
                                    />

                                </div>
                                <div className="position-relative  border ">
                                    <img
                                        src={items?.photos[3]}
                                        alt="image 3"
                                        className="h-[300px] w-full object-cover"
                                    />

                                </div>
                            </Carousel>


                            <p className="text-xl">
                                Hosted by  <span style={{ textTransform: 'capitalize' }}>  {items?.host?.firstname} {items?.host?.lastname} </span>
                            </p>
                            <h3 className="text-lg">7 night</h3>
                            <h3 className="text-lg">${items.price}</h3>
                        </div>
                    </>


                ))) : (
                    <div className="w-full h-[200px] mt-24 justify-center">
                        <p style={{ textAlign: "center" }} className="  text-4xl">No content</p>

                    </div>
                )
                }


            </main >

            < Footer />
        </div >
    )
}
export default Home