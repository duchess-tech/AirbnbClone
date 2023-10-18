import { faAddressBook, faCross, faPhotoFilm, faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import Footer2 from "../component/footer2";
import Navbar2 from "../component/navbar2";
import "../css/become-a-host.css"
import { useNavigate } from "react-router-dom";
import { Context } from "../provider/context";
import axios, { Axios } from "axios";
import httpAuth from "../utils/http";
function Photos() {
    const [show, setshow] = useState(true)
    const [imagesrc, setimagesrc] = useState([])
    const [imagefile, setimagefile] = useState([])
    const [data, setdata] = useState([])
    const [isFooterButtonEnabled, setIsFooterButtonEnabled] = useState(false);
    const navigate = useNavigate();
    const { propertyId } = useContext(Context)
    const mybtn1Opacity = isFooterButtonEnabled ? 1 : 0.4;


    const oninput = async (event, files, index) => {
        let filereader = new FileReader()
        const file = event.target.files[0]
        imagefile.push(event.target.files[0])
        console.log(imagefile)
        filereader.onload = async () => {
            if (files.length > 0) {
                const updatedImages = [...imagesrc]
                updatedImages[index] = filereader.result
                setimagesrc(updatedImages)
                console.log(imagesrc)

                setshow(false)
            }
            if (imagefile.length >= 5) {
                setIsFooterButtonEnabled(true)
                console.log(imagefile.length)
            }

        }
        filereader.readAsDataURL(file)
        console.log(imagesrc)

    }



    const uploadImages = async (e) => {

        const data = new FormData();
        for (let index = 0; index < imagefile.length; index++) {
            data.append("image" + [index], imagefile[index]);
            console.log(data)
        }
        // console.log(imagefile)
        // await httpAuth.post(`/listing/imageupload/${propertyId}`, c, {
        //     method: "post",
        //     headers: { "Content-Type": "multipart/form-data" },
        // })
        // navigate("/become-a-host/titles")
        await httpAuth(`https://airbnclone-backend.onrender.com/listing/imageupload/${propertyId}`,

            {
                method: "POST",
                headers: { "Content-Type": "multipart/form-data" },
                data: data
            })
            .then((res) => {
                console.log("data sent successfully")
                console.log(res.data)
                navigate("/become-a-host/titles")
            })
            .catch(error => {
                console.error("error sending data")
            })
    }
    return (
        <section>
            <Navbar2 />

            {show == true && <div className=" p-2 mt-32">
                <div className=" 2xl:w-[700px] w-full m-auto pb-3  ">
                    <h2 className="text-3xl">
                        Add some photos of your house</h2>
                    <p style={{ fontSize: "20px", }}>You'll need 5 photos to get started. You can add more or make changes later.</p>
                </div>
                <div className="w-[500px]   2xl:w-[700px]  xl:w-[700px]  lg:w-[700px]  md:w-[700px]  sm:w-[400px] m-auto  h-[400px] border-3 d-flex items-center justify-center text-center border-dashed">
                    <div className=" textcenter">
                        <span > <FontAwesomeIcon icon={faPhotoFilm} size="3x"></FontAwesomeIcon></span>
                        <h4 className="text-2xl">Drag your photos here</h4>
                        <p className="text-xl mb-9">Choose at least 5 photos</p>
                        <input style={{ visibility: "hidden", width: "0" }} type="file" name="file" id="file-input" accept=".jpg,.jpeg" onChange={(e) => oninput(e, e.target.files, 0)} />
                        <label className="cursor-pointer underline" htmlFor="file-input">Upload your device here</label>
                    </div>
                </div>
            </div>}


            {
                show == false &&
                <>
                    <div className="c-photos">
                        <div>
                            <h5> Choose at least 5 photos</h5>
                            <h6>Drag to reorder</h6>
                        </div>
                        <div className="addmore-btn rounded-pill"> <FontAwesomeIcon
                            icon={faCross
                            } />Add more</div>
                    </div>
                    <div className="w-[700px] h-[600px] m-auto " style={{ objectFit: "cover", overflow: "hidden" }}>
                        <img style={{ width: "100%" }} src={imagesrc[0]} alt="" />

                    </div>

                    <div className="five-photos">
                        <div className="flex justify-center items-center " style={{ backgroundImage: `url(${imagesrc[1]})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <input style={{ visibility: "hidden", width: "0" }} id="photo-2" type="file" name="file" accept=".jpg,.jpeg" onChange={(e) => oninput(e, e.target.files, 1)} />
                            <label htmlFor="photo-2" >
                                <FontAwesomeIcon icon={faPhotoVideo} size="2x" className="cursor-pointer" />
                            </label>
                        </div>

                        <div className="flex justify-center items-center " size="2x" style={{ backgroundImage: `url(${imagesrc[2]} )`, backgroundSize: "cover", backgroundPosition: "center" }}>

                            <input style={{ visibility: "hidden", width: "0" }} id="photo-3" type="file" name="file" accept=".jpg,.jpeg" onChange={(e) => oninput(e, e.target.files, 2)} />
                            <label htmlFor="photo-3">
                                <FontAwesomeIcon icon={faPhotoFilm} size="2x" />
                            </label>
                        </div>

                        <div className="flex justify-center items-center " style={{ backgroundImage: `url(${imagesrc[3]})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <input style={{ visibility: "hidden", width: "0" }} id="photo-4" type="file" name="file" accept=".jpg,.jpeg" onChange={(e) => oninput(e, e.target.files, 3)} />
                            <label htmlFor="photo-4">
                                <FontAwesomeIcon icon={faPhotoFilm} size="2x" />
                            </label>
                        </div>
                        <div className="flex justify-center items-center " style={{ backgroundImage: `url(${imagesrc[4]})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <input style={{ visibility: "hidden", width: "0" }} id="photo-5" type="file" name="file" accept=".jpg,.jpeg" onChange={(e) => oninput(e, e.target.files, 4)} />
                            <label htmlFor="photo-5">
                                <FontAwesomeIcon icon={faPhotoFilm} size="2x" />
                            </label>
                        </div>
                        <div className="flex justify-center items-center ">
                            <div>
                                <h1>+</h1>
                                <h6>Add more</h6>
                            </div>
                        </div>
                    </div>\become-a-host\overview
                </>

            }

            <div className=" fixed bottom-0 pt-2  w-full  bg-[rgb(221,221,221)]  " >
                <Footer2 link1="/become-a-host/amenities" onClick={uploadImages} isEnabled={true} mybtn1Opacity={mybtn1Opacity} />


            </div>

        </section >
    )
}
export default Photos