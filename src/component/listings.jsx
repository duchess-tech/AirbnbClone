import { faHomeLgAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Listings(props) {
    return (
        <div className=" border-2 h-24 flex mt-3 rounded-xl items-center p-3  border-ash  hover:border-black hover:bg-[#f3f4f6]/50 sm:w-full  ">
            <div className="rounded-lg w-10 h-10 flex justify-center items-center bg-ash">
                <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faHomeLgAlt}></FontAwesomeIcon>
            </div>
            <span className="ml-3 text-lg">
                {props.name}</span>
        </div>

    )
}
export default Listings