import { useContext, useRef, useState } from "react"
import Footer2 from "../component/footer2"
import Navbar2 from "../component/navbar2"
import Navbar3 from "../component/navbar3"
import { Context } from "../provider/context"
import httpAuth from "../utils/http"
import { useNavigate } from "react-router-dom"

function Title(props) {
    const [updatetext, setupdatetext] = useState(0)
    const [PropertyTitle, setPropertyTitle] = useState("")
    const title = useRef()
    const { propertyId } = useContext(Context)
    const navigate = useNavigate();


    const handleText = (e) => {
        const textLenght = title.current.value.length
        setupdatetext(textLenght)
    }

    // const handletitle = () => {
    //     const titleText = title.current.value
    //     setPropertyTitle(titleText)
    // }

    const uploadTitle = async (e) => {
        const titleText = await title.current.value
        setPropertyTitle(titleText)
        console.log(PropertyTitle)

        try {
            const response = await httpAuth.post(`http://localhost:5000/listing/updatepropertybyid/${propertyId}`, { PropertyTitle });
            navigate("/become-a-host/description")
        }
        catch (error) {
            console.log(error)
        }

    }



    return (
        <div>
            <Navbar3 />
            <div className="mt-56">
                <div className="w-[700px] m-auto">
                    <h2 className="text-3xl font-semibold">
                        Now, let's give your house a title
                    </h2>
                    <p className="pt-6 pb-6 text-ash2 text-lg">
                        Short titles work best. Have fun with it—you can always change it later.
                    </p>
                </div>
                <div className="m-auto w-[700px]">
                    <textarea className="w-[600px] p-4 h-[200px] text-2xl border-2 border-black " ref={title} name="" id="" maxLength={32} onChange={(e) => handleText(e.target.value)} />
                    <p>{updatetext}/32</p>
                </div>
            </div>
            <div className=" fixed bottom-0 pt-2  w-full  bg-[rgb(221,221,221)]  " >
                <Footer2 link1="/become-a-host/photos" isEnabled={true} onClick={uploadTitle} />


            </div>

        </div>
    )
}
export default Title