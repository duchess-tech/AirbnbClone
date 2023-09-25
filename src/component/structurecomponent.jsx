
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react";
import "../css/become-a-host.css"

function Sc(props) {
    const { icon, size, DescName, onGetDescName, bdgc, bgc, } = props
    const dname = useRef(null)
    const handleButtonClick = (e) => {
        const event = e.target
        const YourdName = dname.current.textContent
        onGetDescName(YourdName, event)

    };

    return (
        <div onClick={handleButtonClick} style={{ borderColor: `${bdgc}`, backgroundColor: `${bgc}` }} className="border-2 rounded-xl 2xl:w-52 xl:w-52 lg:w-52 md:w-52 w-44  h-24 2xl:h-24 xl:h-24 lg:h-24  md:h-24  hover:border-[black] ">
            <div className="mini-box">
                <FontAwesomeIcon icon={icon} size={size} />
                <h5 ref={dname}>{DescName}</h5>
            </div>
        </div>
    )

}
export default Sc