import { useState } from "react"
import { Link } from "react-router-dom"



function Footer2(props) {
    const { link1, link2, isEnabled, onClick, mybtn1Opacity, back } = props
    const [loading,setloading]=useState(false)

    return (
        <div className="flex 2xl:p-3 xl:p-3 lg:p-3 md:p-3 p-4  justify-between items-center w-full bg-[#ffffff]">
            <button className="border-0 bg-transparent  " onClick={back}>
                <Link to={link1}>Back</Link>
            </button>
            <Link to={link2}>
                <button onClick={onClick} disabled={!isEnabled} className="w-36 bg-black p-2 rounded-lg text-[#ffffff]" style={{ opacity: mybtn1Opacity }}>{loading ? <span className="spinner-border"></span>:"Next" }</button></Link>
        </div>
    )
}
export default Footer2