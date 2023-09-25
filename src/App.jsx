import { faGreaterThan, faHeartCircleCheck, faHeartbeat, faLessThan, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./css/nav.css"

import { useEffect, useRef } from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FacebookIcon } from "react-share";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { FaApple, FaEnvelope, FaHeart, FaRegHeart } from "react-icons/fa";
import httpAuth from "./utils/http";
import { handleSaveToken } from "./utils/localstorage";
import { Carousel, Typography } from "@material-tailwind/react";




function Home(props) {
    const [properties, setProperties] = useState([])
    const [photos, setPhotos] = useState([])
    const [listinginfo, setlistinginfo] = useState([])
    const [showLogin, setShowLogin] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [showEmailOtp, setShowEmailOtp] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [loading, setloading] = useState(false)
    const [errorword, seterrorword] = useState("")
    const [otperror, setotperror] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const email = useRef()
    const otp = useRef()
    const firstname = useRef()
    const lastname = useRef()
    const birthdate = useRef()
    const useremail = useRef()
    const [index, setIndex] = useState(0)
    let isMounted = true;
    const handleselected = (selectIndex) => {
        setIndex(selectIndex)
    }

    const togglePopup = () => {
        setShowPopup(!showPopup)
        setloading(false)
    }
    const togglePopuptrue = () => {
        setShowLogin(true)
        setShowPopup(false)
    }
    const togglePopupfalse = () => {
        setShowLogin(false)

    }
    const backTologin = () => {
        setShowLogin(true)
        setShowEmailOtp(false)

    }
    const backToConfirmEmail = () => {
        setShowEmailOtp(true)
        setShowRegister(false)
    }

    const exitEmailOtp = () => {
        setShowEmailOtp(false)
    }
    const exitRegister = () => {
        setShowRegister(false)
    }

    // useEffect(() => {
    //     const FetchCategories = async () => {
    //       try {
    //         setloadingCategory(true);
    //         const response = await httpClient.get(`/category/getallcategory`);
    //         setcategories(["All", ...response.data.category]);
    //         setTimeout(() => {
    //           setloadingCategory(false);
    //         }, 1000);
    //       } catch (error) {
    //         setcategories([]);
    //         setloadingCategory(true);
    //       }
    //     };

    //     if (isMountedCat) {
    //       FetchCategories();
    //     }
    //     return () => {
    //       isMountedCat = false;
    //     };
    //   }, []);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                console.log("properties")
                // setloading(true);
                const response = await httpAuth.get(`property/getallproperties`);
                setProperties(response.data.properties);
            }
            catch (error) {
                // setProperty([]);
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




    const postEmail = async () => {
        setotperror("")
        setloading(true)
        const Email = email.current.value
        if (Email.includes("@" && "gmail" && ".com")) {
            seterrorword("")
            await axios.post(
                "http://localhost:5000/signup/email", { Email }

            )
                .then((res) => {
                    setShowLogin(false)
                    setShowEmailOtp(true)
                    const result = res.data.email
                    setuserEmail(result)
                    setloading(false)
                    console.log("data sent successfully")

                })
                .catch(error => {
                    console.error("error sending data")
                })
        }
        else {
            seterrorword("email not correct")
            setloading(false)
        }

    }


    const verifyEMail = async () => {
        setloading(true)
        const userOtp = otp.current.value
        await axios.post(
            "http://localhost:5000/signup/verifyotp", { userOtp }
        )

            .then((res) => {
                console.log(res)
                setloading(false)
                setShowEmailOtp(false)

            }
            )
            .catch(error => {
                if (error.response.status === 403) {
                    setotperror(error.response.data.message)
                }
                if (error.response.data.message == "Please proceed to register") {
                    setShowEmailOtp(false)
                    setShowRegister(true)
                }
                setloading(false)

            }
            )

    }


    const createUser = async () => {

        setloading(true)
        const userDetails = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            birthdate: birthdate.current.value,
            email: useremail.current.value
        }
        try {
            const response = await httpAuth.post('http://localhost:5000/signup/createuser', userDetails
            )

            handleSaveToken(response.data.token)
            setShowRegister(false)
            setloading(false)
        }

        catch (error) {
            console.error("error sending data to the server")
            setShowRegister(false)

        }
    }



    return (
        <div>
            <Navbar togglePopuptrue={togglePopuptrue} togglePopup={togglePopup} showPopup={showPopup} setShowPopup={setShowPopup} />
            {
                showLogin &&
                <div className=" w-[600px] absolute bg-[#ffffff] left-[500px] top-[32px] h-[700px] border-2 rounded-xl">
                    <div className="flex  p-4 gap-40">
                        <FontAwesomeIcon icon={faMultiply} className="ml-3 cursor-pointer" onClick={togglePopupfalse} />
                        <h2>Log in or sign up</h2>
                    </div>
                    <hr />
                    <div className="p-4 mt-2 text-2xl">
                        <h1>Welcome to Airbnb</h1>
                        <div className=" w-[550px] border-2  rounded-xl" >

                            <input type="email" placeholder="Email" ref={email} className="border-0 p-2 w-[547px] text-lg rounded-md  h-14" />

                        </div>
                        <p className="text-sm  text-[#dc3545]">{errorword}</p>
                        <p className="text-sm mt-2">We'll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
                    </div>

                    <div className="m-auto w-[550px] ">
                        <button className="border-0 w-[550px] h-12 cursor-pointer  rounded-xl bg-[#e01561] text-[#ffffff] mb-4 text-lg font-semibold " onClick={postEmail}>{loading ? <span className="spinner-border"></span> : "continue"}   </button>
                        <div className="flex justify-center items-center gap-2">
                            <hr className="w-64" />
                            <p className="text-sm">or</p>
                            <hr className="w-64" />
                        </div>

                        <button className="border-2 w-[550px] h-12 rounded-xl border-black gap-32 p-6 flex items-center mt-4  text-lg font-semibold ">
                            <FacebookIcon className="h-8 w-6"></FacebookIcon>
                            <span>continue with facebook</span>
                        </button>
                        <button className="border-2 w-[550px] h-12  gap-32 p-6 flex items-center rounded-xl border-black mt-3 text-lg font-semibold ">
                            <FcGoogle></FcGoogle>
                            <span>continue with google</span></button>
                        <button className="border-2 w-[550px] h-12  gap-32 p-6 flex items-center rounded-xl border-black  mt-3 text-lg font-semibold">
                            <FaApple></FaApple>
                            <span>continue with facebook</span>
                        </button>
                        <button className="border-2 w-[550px] h-12 gap-32 p-6 flex items-center  rounded-xl border-black  mt-3 text-lg font-semibold">
                            <FaEnvelope></FaEnvelope>
                            <span>continue with email</span>
                        </button>
                    </div>
                </div>
            }

            {showEmailOtp &&
                <div className=" cursor-pointer w-[500px] absolute bg-[#ffffff] left-[500px] top-[200px] h-[350px] border-2 rounded-xl p-3" >

                    <div className="flex  justify-between mt-3 mb-9">
                        <FontAwesomeIcon icon={faLessThan} onClick={backTologin} />
                        <h3 className="">Confirm your email</h3>
                        <FontAwesomeIcon icon={faMultiply} className="ml-3" onClick={exitEmailOtp} />

                    </div>
                    <div className="">
                        <h1 className="text-md mb-4">Enter the code we sent over to {userEmail} </h1>
                        <input type="" ref={otp} className="border-2 p-2 w-[300px] text-lg rounded-md  h-14" />
                        <p className="text-danger">{otperror}</p>

                    </div>
                    <button className="mt-10 bg-[#dc3545] text-lg w-[150px] p-2 text-white" onClick={verifyEMail}>{loading ? <span className="spinner-border text-white"></span> : "Continue"}</button>

                </div>
            }
            {
                showRegister &&
                <div className=" w-[600px] absolute bg-[#ffffff] left-[500px] top-[32px] h-[700px] border-2  rounded-xl">
                    <div className="flex justify-between p-3">
                        <FontAwesomeIcon icon={faLessThan} onClick={backToConfirmEmail} />
                        <h3 className="">Finish signing up</h3>
                        <FontAwesomeIcon icon={faMultiply} className="ml-3" onClick={exitRegister} />

                    </div>

                    <hr />
                    <div className=" p-4 ">
                        <div className="border-2 rounded-md">
                            <input type="text" placeholder="First Name" ref={firstname} className="border-b-2 w-full text-lg p-2  h-14 " />
                            <input type="text" placeholder="Last Name" ref={lastname} className=" p-2 w-full text-lg rounded-md p-2 h-14" />
                        </div>
                        <p className="mt-2 text-sm">Make sure it matches the name on your id</p>

                        <div className=" mt-10">
                            <input type="text" placeholder="Birthdate" ref={birthdate} className=" border-2 p-2 w-[567px] text-lg rounded-md p-2 h-14" />
                            <p className="mt-2 text-sm">To sign up,you need to be at least 18.Your birthday wont be shared with other people who use Airbnb</p>
                        </div>
                        <div className=" mt-10">
                            <input type="email" placeholder="Email" ref={useremail} className=" border-2 p-2 w-[567px] text-lg rounded-md p-2 h-14 " />
                            <p className="mt-2 text-sm">We'll email you trip confirmations and receipt</p>
                        </div>
                        <div className="mt-10">
                            <p className="text-sm">By selecting Agree and continue ,I agree to Airbnb's Terms and services, payments Terms of services and  Nondiscrimination Policy and acknowledge the Privacy Policy</p>
                            <button className=" border-2 p-2 w-[567px] text-lg text-[#da0a65] rounded-md p-2 h-14 mt-2" onClick={createUser}>{loading ? <span className="spinner-border"></span> : "Agree and continue"}</button>
                        </div>


                    </div>

                </div>
            }



            <main className="p-8 flex gap-x-8  gap-y-12 justify-center flex-wrap  "  >

                {properties.map((items, index) => (
                    <div className=" " key={index}>
                        <Carousel className=" rounded-xl w-[350px] h-[300px]  overflow-hidden">
                            <div className="position-relative border  ">
                                <img
                                    src={items.photos[0]}
                                    alt="image 1"
                                    className="h-full w-full object-cover"
                                />

                            </div>
                            <div className=" position-relative  border  ">
                                <img
                                    src={items.photos[1]}
                                    alt="image 2"
                                    className="h-full w-full object-cover"
                                />

                            </div>
                            <div className="position-relative  border ">
                                <img
                                    src={items.photos[3]}
                                    alt="image 3"
                                    className="h-full w-full object-cover"
                                />

                            </div>
                        </Carousel>


                        <h3>esther</h3>
                        <p>
                            stay with {items.host.firstname}
                        </p>
                        <h3>${items.price}</h3>
                        <h3>esther</h3>
                    </div>


                ))
                }

            </main >





            {/* 
            <div className="mb-24">
                <Carousel activeIndex={index} onSelect={handleselected}>
                    <Carousel.Item className="mb-24 w-[350px] h-[300px] border rounded-lg">
                        <img alt="" />
                    </Carousel.Item>
                </Carousel>
            </div> */}










            < Footer />
        </div >
    )
}
export default Home