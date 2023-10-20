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
import Skeleton from '@mui/material/Skeleton';





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
        setloading(true)
        try {
            const response = await httpAuth.get(`/category/getcategories?placeDescription=${param}`)
            setCategory([...response.data.category]);
            setTimeout(() => {
                setIsActive(true);
                setloading(false)

            });


        }
        catch (error) {
            console.log(error)
            setCategory([]);
            setloading(false)

        }
    };



    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setTimeout(() => {
                    setloading(true)

                })
                const response = await httpAuth.get(`/property/getallproperties`);
                setCategory(response.data.properties);

                // localStorage.setItem("loggedIn", JSON.stringify(true));
            }
            catch (error) {
                console.log(error)
            }
        };
        if (isMounted) {
            fetchProperties();
            setloading(false)

        }
        return () => {
            isMounted = false;
            setloading(false)

        };
    }, []);




    const slideInStyles = {
        position: 'relative',
        left: isActive ? '0px' : '-100%',
        transition: 'left 2s ease-in'
    };



    return (
        <div>
            {/* {modal && <Modal />} */}
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



            <main className="p-8 flex justify-evenly  gap-y-12  flex-wrap  "  >

                {Category.length > 0 &&
                    (shuffleArray(Category)?.map((items, index) =>
                    (

                        <div style={slideInStyles} key={index}>
                            <Carousel className=" rounded-xl w-[260px] h-[250px]   overflow-hidden"
                                autoPlay
                                transition={{ duration: 2 }}
                                interval={1000}
                            >
                                <div className="position-relative border " >
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


                            <p className="text-lg  font-medium">
                                Hosted by  <span style={{ textTransform: 'capitalize' }}>  {items?.host?.firstname} {items?.host?.lastname} </span>
                            </p>
                            <h3 className="text-md font-thin">7 night</h3>
                            <h3 className="text-md">${items.price}</h3>
                        </div>



                    )))


                }
                {
                    loading &&
                    <span className="spinner-border"></span>

                }
                {
                    Category.length <= 0 && !loading &&
                    <p>No content</p>
                }


            </main >
            < Footer />
        </div >
    )
}
export default Home