import { Fragment, useContext, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faMultiply } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Context } from '../provider/context'
import { useNavigate } from 'react-router-dom'
import { handleSaveToken, setLogin } from '../utils/localstorage'

export default function Register() {
    const { setShowRegister, backToConfirmEmail, exitRegister, email } = useContext(Context)
    const cancelButtonRef = useRef(null)
    const [loading, setloading] = useState(false)
    const [open, setOpen] = useState(true)
    const [isFValid, setisFValid] = useState(true)
    const [isLValid, setisLValid] = useState(true)
    const [isBValid, setisBValid] = useState(true)
    const [submitAttempted, setsubmitAttempted] = useState(false)
    const navigate = useNavigate()
    const firstname = useRef(null)
    const lastname = useRef(null)
    const birthdate = useRef(null)
    const useremail = useRef(null)
    const onClose = () => {
        setOpen(false)
        setShowRegister(false)
    }
    const createUser = async (e) => {
        e.preventDefault()
        try {
            setsubmitAttempted(true)

            setloading(true)
            const userDetails = {
                firstname: firstname.current.value,
                lastname: lastname.current.value,
                birthdate: birthdate.current.value,
                email: useremail.current.value
            }

            let isFirstNameEmpty = !firstname.current.value.trim()
            let isLastNameEmpty = !lastname.current.value.trim()
            let isBirthdateEmpty = !birthdate.current.value.trim()

            if (isFirstNameEmpty || isLastNameEmpty || isBirthdateEmpty) {
                setisFValid(!isFirstNameEmpty)
                setisLValid(!isLastNameEmpty)
                setisBValid(!isBirthdateEmpty)
                // e.stopPropergation()
                setTimeout(() => {
                    setloading(false)
                }, [3000]);
                return

            }

            const response = await axios.post('https://airbnclone-backend10.onrender.com/signup/createuser', userDetails
            )
            handleSaveToken(response.data.token)
            setLogin(true)
            setShowRegister(false)
            setloading(false)
            navigate("/become-a-host")

        }

        catch (error) {
            console.error("error sending data to the server")
            setTimeout(() => {

                setShowRegister(false)
                setloading(false)


            }, [3000]);

        }
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
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10   w-screen">
                    <div className="flex min-h-full items-end justify-center mt-12 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform bg-white  rounded-lg  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <form onSubmit={createUser} className=" w-[600px]  top-10    bg-[#ffffff] h-[650px]   rounded-xl">
                                    <div className="flex justify-between p-3">
                                        <FontAwesomeIcon icon={faLessThan} onClick={backToConfirmEmail} />
                                        <h3 className="">Finish signing up</h3>
                                        <FontAwesomeIcon icon={faMultiply} className="ml-3" onClick={exitRegister} />

                                    </div>

                                    <hr />
                                    <div className=" p-4 ">
                                        <div className="  rounded-md">
                                            <input style={{ borderBottomColor: submitAttempted && !isFValid ? "red" : "" }} type="text" placeholder="First Name" ref={firstname} className="border-2 w-full text-lg  rounded-md p-2  h-14 " />
                                            <input style={{ borderBottomColor: submitAttempted && !isLValid ? "red" : "" }} type="text" placeholder="Last Name" ref={lastname} className=" border-2 p-2 w-full text-lg rounded-md mt-2  p-2 h-14" />

                                        </div>
                                        <p className="mt-2 text-sm">Make sure it matches the name on your id</p>

                                        <div className=" mt-10">
                                            <input type="text" placeholder="Birthdate" style={{ borderBottomColor: submitAttempted && !isBValid ? "red" : "" }} ref={birthdate} className=" border-2 p-2 form-control text-lg rounded-md p-2 h-14" />
                                            <p className="mt-2 text-sm">To sign up,you need to be at least 18.Your birthday wont be shared with other people who use Airbnb</p>
                                        </div>
                                        <div className=" mt-10">
                                            <input type="email" placeholder="{RegisteredEmail}" required disabled ref={useremail} value={email} className=" border-2 p-2 form-control text-lg rounded-md p-2 h-14 " ></input>
                                            <p className="mt-2 text-sm">We'll email you trip confirmations and receipt</p>
                                        </div>
                                        <div className="mt-10">
                                            <p className="text-sm">By selecting Agree and continue ,I agree to Airbnb's Terms and services, payments Terms of services and  Nondiscrimination Policy and acknowledge the Privacy Policy</p>
                                            <button type='submit' className=" border-2 p-2 w-[500px] text-lg text-[#da0a65] rounded-md  h-14 mt-2">{loading ? <span className="spinner-border"></span> : "Agree and continue"}</button>
                                        </div>


                                    </div>

                                </form>
                            </Dialog.Panel>


                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
