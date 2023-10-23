import { Fragment, useContext, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faMultiply } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Context } from '../provider/context'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../utils/localstorage'

export default function ConfirmEmail() {
    const { setShowEmailOtp, setShowRegister, backTologin, email, shouldNavigate } = useContext(Context)
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    const [otperror, setotperror] = useState("")
    const otp = useRef()
    const navigate = useNavigate()

    const [loading, setloading] = useState(false)
    const onClose = () => {
        setOpen
        setShowEmailOtp(false)
    }
    const exitEmailOtp = () => {
        setShowEmailOtp(false)
    }
    const verifyEMail = async () => {
        setloading(true)
        const userOtp = otp.current.value
        await axios.post(
            "https://airbnclone-backend10.onrender.com/signup/verifyotp", { userOtp }
        )
            .then((res) => {
                console.log(res)
                setloading(false)
                setShowEmailOtp(false)
                setLogin(true)
                navigate("/");
                location.reload()
                if (shouldNavigate) {
                    navigate("/become-a-host")
                }
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
                setTimeout(() => {
                    setloading(false)
                }, [3000])

            }
            )

    }




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
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
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
                                <div className=" cursor-pointer lg:w-[500px]  bg-[#ffffff] h-[350px]  rounded-xl p-3" >

                                    <div className="flex  justify-between mt-3 mb-9">
                                        <FontAwesomeIcon icon={faLessThan} onClick={backTologin} />
                                        <h3 className="">Confirm your email</h3>
                                        <FontAwesomeIcon icon={faMultiply} className="ml-3" onClick={exitEmailOtp} />

                                    </div>
                                    <div className="">
                                        <h1 className="text-md mb-4">Enter the code we sent over to {email} </h1>
                                        <input type="" ref={otp} className="border-2 p-2 w-[300px] text-lg rounded-md  h-14" />
                                        <p className="text-danger">{otperror}</p>

                                    </div>
                                    <button className="mt-10 bg-[#dc3545] rounded-lg text-lg w-[150px] p-2 text-white" onClick={verifyEMail}>{loading ? <span className="spinner-border text-white"></span> : "Continue"}</button>

                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
