import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faMultiply } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Context } from '../provider/context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginOrSignup(props) {
    const { togglePopuptrue } = useContext(Context)
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    const { Loggedin } = useContext(Context)
    const navigate = useNavigate()
    const onClose = () => {
        setOpen(false)
    }
    const handleLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("loggedIn");
        navigate("/");
        location.reload()
        // localStorage.removeItem("propertyId");
    };

    return (

        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>


                <div className="fixed inset-0 lg:right-4 lg:top-12 top-52 flex lg:justify-end  justify-center">
                    <div className=" w-[300px]  sm:p-0">
                        <Transition.Child
                            as={Fragment}

                        >
                            {Loggedin ? < Dialog.Panel className="relative transform bg-white rounded-lg  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="shadow  bg-white rounded-xl border-2 ">
                                    <div className="p-3 ">
                                        <h3 className="text-md mt-2 cursor-pointer" >Message</h3>
                                        <h3 className="text-md mt-3  cursor-pointer"  >Trips</h3>
                                        <h3 className="text-md mt-3  cursor-pointer"  >Wishlist</h3>
                                    </div>
                                    <hr />
                                    <div className="p-3 ">
                                        <h3 className="text-md mt-2 cursor-pointer" >Manage Listings</h3>
                                        <h3 className="text-md mt-3  cursor-pointer"  >Manage experiences</h3>
                                        <h3 className="text-md mt-3  cursor-pointer"  >Account</h3>
                                    </div>
                                    <hr />

                                    <div className="p-3 ">
                                        <h3 className="text-md mt-2  cursor-pointer ">Help</h3>
                                        <h3 className="text-md mt-3  cursor-pointer" onClick={handleLogOut}>Logout</h3>
                                    </div>

                                </div>


                            </Dialog.Panel> : <Dialog.Panel className="relative transform bg-white rounded-lg  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="shadow  bg-white rounded-xl border-2 ">
                                    <div className="p-3 ">
                                        <h3 className="text-sm mt-2 cursor-pointer" onClick={togglePopuptrue} >Log in</h3>
                                        <h3 className="text-sm mt-3  cursor-pointer" onClick={togglePopuptrue}  >Sign in</h3>
                                    </div>
                                    <hr />
                                    <div className="p-3 ">
                                        <h3 className="text-sm mt-2  cursor-pointer ">Airbnb your home</h3>
                                        <h3 className="text-sm mt-3  cursor-pointer">Help</h3>
                                    </div>

                                </div>


                            </Dialog.Panel>}
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root >


    )
}
