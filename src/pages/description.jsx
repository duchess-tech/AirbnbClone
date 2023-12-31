import { useContext, useEffect, useRef, useState } from "react"
import Footer2 from "../component/footer2"
import Navbar3 from "../component/navbar3"
import httpAuth from "../utils/http"
import { useNavigate } from "react-router-dom"
import { Context } from "../provider/context"

function Description() {
    const [propertydescription, setpropertyDescription] = useState(true)
    const [desC, setdesC] = useState({
        "Family-Friendly": false,
        "Unique": false,
        "Stylish": false,
        "Central": false,
        "Spacious": false,
    });
    const [updatetext, setupdatetext] = useState("You'll have a great time at this comfortable place to stay.")
    const [descriptionText, setDescriptionText] = useState("")
    const [textCount, setTextCount] = useState(50)
    const [color, setColor] = useState("")
    const title = useRef()
    const navigate = useNavigate();
    const { propertyId } = useContext(Context)





    const handleAdditionaldescription = (e) => {

        const val = e.target.innerHTML;
        setdesC(prevDesC => ({
            ...prevDesC, [val]: !prevDesC[val]
        }));


    }



    const handleText = (e) => {
        const textlnt = e.length;
        setupdatetext(e);
        setTextCount(textlnt);
    }

    const uploadAddDescription = async (e) => {
        const additionalDescription = desC
        try {
            const response = await httpAuth.post(`http://localhost:5000/listing/updatepropertybyid/${propertyId}`, additionalDescription);
            setpropertyDescription(false)
            setColor("")
        }
        catch (error) {
            console.log(error)
        }
    }


    const uploadDescription = async (e) => {
        const desText = title.current.value
        setDescriptionText(desText)
        const placeDescription = descriptionText
        try {
            const response = await httpAuth.post(`https://airbnclone-backend10.onrender.com/listing/updatepropertybyid/${propertyId}`, { placeDescription });
            navigate("/become-a-host/finishedsetup")
        }
        catch (error) {
            console.log(error)
        }
    }


    return (

        <div>
            <Navbar3 />
            {propertydescription && <>
                <div className="mt-72">
                    <div className="w-[700px] m-auto">
                        <h2 className="text-3xl font-semibold ">
                            Next, let's describe your house
                        </h2>
                        <p className="pt-6 pb-6 text-ash2 text-lg">
                            Choose up to 2 highlights. We'll use these to get your description started.
                        </p>
                    </div>

                    <div className="m-auto w-[700px]  flex flex-wrap  gap-3">
                        {Object.keys(desC).map(key => (
                            <button
                                key={key}
                                onClick={handleAdditionaldescription}
                                style={{ backgroundColor: desC[key] ? "#C0BEBE" : "" }}
                                className="border w-44  p-3 rounded-pill"
                            >
                                {key}
                            </button>
                        ))}

                    </div>

                </div>
                <div className=" fixed bottom-0 pt-2  w-full  bg-[rgb(221,221,221)]  " >
                    <Footer2 link1="/become-a-host/titles" isEnabled={true} onClick={uploadAddDescription} />


                </div>
            </>

            }






            {propertydescription == false &&
                <>

                    <div className="mt-48">
                        <div className="w-[700px] m-auto">
                            <h2 className="text-3xl font-semibold">
                                Create your description
                            </h2>
                            <p className="pt-6 pb-6 text-ash2 text-lg">
                                Share what makes your place special.
                            </p>
                        </div>
                        <div className="m-auto w-[700px]">
                            <textarea className="w-[600px] p-4 h-[250px] rounded-xl text-xl border-2 border-black " ref={title} name="" id="title" maxLength={500} value={updatetext} onChange={(e) => handleText(e.target.value)}></textarea>
                            <p>{textCount}/500</p>
                        </div>
                    </div>
                    <div className=" fixed bottom-0 pt-2  w-full  bg-[rgb(221,221,221)]  " >
                        <Footer2 back={() => setpropertyDescription(true)} isEnabled={true} onClick={uploadDescription} />


                    </div>
                </>
            }


        </div>









    )

}
export default Description