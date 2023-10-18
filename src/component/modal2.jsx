import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FcGoogle } from 'react-icons/fc'
import { FaApple, FaEnvelope } from 'react-icons/fa'
import { FacebookIcon } from 'react-share'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { Context } from '../provider/context'
import { useContext } from 'react'


export default function SignupModal(props) {
    const { setShowLogin, setShowEmailOtp, setemail } = useContext(Context)
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    const [errorword, seterrorword] = useState("")
    const [otperror, setotperror] = useState("")
    const email = useRef()
    const [loading, setloading] = useState(false)
    const Cancel = () => {
        setOpen(false)
        setShowLogin(false)
    }
    const onClose = () => {
        setOpen
        setShowLogin(false)
    }
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
                    setemail(res.data.email)
                    setShowEmailOtp(true)
                    setloading(false)
                    console.log("data sent successfully")

                })
                .catch(error => {
                    setTimeout(() => {
                        setloading(false)

                    }, [5000]);
                    console.error("error sending data")
                })
        }
        else {
            seterrorword("email not correct")
            setloading(false)
        }

    }




    // const GoogleLogin = useGoogleLogin({
    //     onSuccess: async (response) => {
    //       const token = response.access_token;
    //       try {
    //         const res = await httpClient.post("/Oauth/google", { token });
    //         handleSaveToken(res.data.token);
    //         setModalShow(false);
    //         handleSaveUser(res.data.user);
    //         setLogin(res.data.user);
    //         setauthloading(false);
    //         navigate(Location.pathname);
    //         location.reload();
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     },
    //   });

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform bg-white rounded-lg  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="flex  p-4 gap-40">
                                    <FontAwesomeIcon icon={faMultiply} onClick={Cancel}
                                        ref={cancelButtonRef} className="ml-3 cursor-pointer" />
                                    <h2>Log in or sign up</h2>
                                </div>
                                <hr />
                                <div className="p-4 mt-2 text-2xl">
                                    <h1>Welcome to Airbnb</h1>
                                    <div className=" w-[450px] border-2 form-floating border-black rounded-xl" >

                                        <input type="email" placeholder="Email " ref={email} className="border-0  form-floating p-2 form-control text-lg rounded-md  h-14" />

                                    </div>
                                    <p className="text-sm  text-[#dc3545]">{errorword}</p>
                                    <p className="text-sm mt-2">We'll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
                                </div>

                                <div className="m-auto w-[450px] pb-2">
                                    <button className="border-0 w-[450px] h-12 cursor-pointer  rounded-xl bg-[#e01561] text-[#ffffff] mb-4 text-lg font-semibold " onClick={postEmail}>{loading ? <span className="spinner-border"></span> : "continue"}   </button>
                                    <div className="flex justify-center items-center gap-2">
                                        <hr className="w-64" />
                                        <p className="text-sm">or</p>
                                        <hr className="w-64" />
                                    </div>

                                    <button className="border-2 w-[450px] h-12 rounded-xl border-black gap-32 p-6 flex items-center mt-4  text-lg font-semibold ">
                                        <FacebookIcon className="h-8 w-6"></FacebookIcon>
                                        <span>continue with facebook</span>
                                    </button>
                                    <button className="border-2 w-[450px] h-12  gap-32 p-6 flex items-center rounded-xl border-black mt-3 text-lg font-semibold ">
                                        <FcGoogle></FcGoogle>
                                        <span>continue with google</span></button>
                                    <button className="border-2 w-[450px] h-12  gap-32 p-6 flex items-center rounded-xl border-black  mt-3 text-lg font-semibold">
                                        <FaApple></FaApple>
                                        <span>continue with facebook</span>
                                    </button>
                                    <button className="border-2 w-[450px] h-12 gap-32 p-6 flex items-center  rounded-xl border-black  mb-2 mt-3 text-lg font-semibold">
                                        <FaEnvelope></FaEnvelope>
                                        <span>continue with email</span>
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
