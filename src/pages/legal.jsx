
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer2 from "../component/footer2";
import Navbar3 from "../component/navbar3";
import "../css/become-a-host.css"

function Legal(props) {
    const [SelectedOption, setSelectedOption] = useState("Private individual")
    const [isChecked, setisChecked] = useState({ securityCamera: false, weapons: false, dangerousAnimals: false })

    const handlechange = (e) => {
        const { value } = e.target
        setSelectedOption(value)
    }
    const checkedboxChange = (e) => {
        const { name, checked } = e.target
        setisChecked((prevcheckedboxes) => ({ ...prevcheckedboxes, [name]: checked }))
    }
    useEffect(() => {
        console.log(isChecked)

    }, [checkedboxChange])
    useEffect(() => {
        console.log(SelectedOption)

    }, [SelectedOption])

    return (
        <div className="Pt-section">
            <Navbar3 />
            <div className="mt-28 mb-10 "  >
                <div className="w-[650px] m-auto ">
                    <h3 className="font-semibold text-4xl">Just one last step!</h3>
                    <p className="text-xl font-semibold pt-3 pb-3">How are you hosting on Airbnb?</p>
                </div>
                <div >
                    <div className="m-auto w-[650px] flex gap-x-3 items-center">
                        <input type="radio" value="Private individual" checked={SelectedOption === "Private individual"} onChange={handlechange} className="w-5 h-5" />
                        <h3 className="text-lg">I'm hosting as a private individual</h3>
                    </div>
                    <div className="m-auto w-[650px] mt-2 flex gap-x-3 items-center">
                        <input type="radio" value="Business" checked={SelectedOption === "Business"} onChange={handlechange} className="w-5 h-5" />
                        <h3 className="text-lg"> I'm hosting as a business</h3>
                    </div>
                </div>
                <div className="w-[650px] m-auto text-xl font-medium pt-12"><h2>Does your place have any of these?</h2></div>

                <div className=" text-ash2 pt-8 pb-8 border-ash border-b-2  w-[650px]  m-auto">
                    <div>
                        <div className="flex  justify-between item-center  ">

                            <h2 className="text-lg">Security camera(s)</h2>
                            <input type="checkbox" name="securityCamera" checked={isChecked.securityCamera} onChange={checkedboxChange} className=" w-6 h-12" />                    </div>
                    </div>
                    <div>
                        <div className="flex  justify-between item-center  ">

                            <h2 className="text-lg">Weapons</h2>
                            <input type="checkbox" name="weapons" checked={isChecked.weapons} onChange={checkedboxChange} className=" w-6 h-12" />                    </div>
                    </div>
                    <div>
                        <div className="flex  justify-between item-center  ">

                            <h2 className="text-lg">Dangerous animals</h2>
                            <input type="checkbox" name="dangerousAnimals" checked={isChecked.dangerousAnimals} onChange={checkedboxChange} className=" w-6 h-12" />                    </div>
                    </div>
                </div>
                <div className="w-[650px] m-auto  pt-8 text-ash2">
                    <h3 className=" text-xl">Important things to know</h3>
                    <p className="text-md">Be sure to comply with your local laws and review Airbnb's nondiscrimination policy and guest and Host fees.</p>
                </div>
            </div>
            <div style={{ padding: "3px", background: "rgb(221, 221, 221)" }}></div>
            <Footer2 isEnabled={true} link1='/become-a-host/discount' link2="/become-a-host/receipt" />
        </div >
    )
} export default Legal