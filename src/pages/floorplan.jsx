
import { useContext, useState } from 'react'
import Footer2 from '../component/footer2'
import Navbar2 from '../component/navbar2'
import '../css/listingpage.css'
import axios from 'axios'
import httpAuth from '../utils/http'
import { Context } from '../provider/context'
import { useNavigate } from 'react-router-dom'

function Floorplan() {
    const [detailNum, setdetailNum] = useState({ guest: 4, bedroom: 1, bed: 1, bathroom: 1 })
    const navigate = useNavigate();
    const { propertyId } = useContext(Context)
    const handleiIncrease = (id) => {
        if (id == "guest") {
            setdetailNum({ ...detailNum, guest: detailNum.guest + 1 })
        }
        if (id == "bedroom") {
            setdetailNum({ ...detailNum, bedroom: detailNum.bedroom + 1 })
        }
        if (id == "bed") {
            setdetailNum({ ...detailNum, bed: detailNum.bed + 1 })
        }
        if (id == "bathroom") {
            setdetailNum({ ...detailNum, bathroom: detailNum.bathroom + 0.5 })
        }
    }
    const handleDecrease = (id) => {
        if (id == "guest" && detailNum.guest > 1) {
            setdetailNum({ ...detailNum, guest: detailNum.guest - 1 })
        }
        if (id == "bedroom" && detailNum.bedroom >= 1) {
            setdetailNum({ ...detailNum, bedroom: detailNum.bedroom - 1 })
        }
        if (id == "bed" && detailNum.bed > 1) {
            setdetailNum({ ...detailNum, bed: detailNum.bed - 1 })
        }
        if (id == "bathroom" && detailNum.bathroom > 0.5) {
            setdetailNum({ ...detailNum, bathroom: detailNum.bathroom - 0.5 })
        }
    }



    const uploadDetailNum = async (e) => {
        try {
            const response = await httpAuth.post(`http://localhost:5000/listing/updatepropertybyid/${propertyId}`, { detailNum });
            navigate("/become-a-host/standout")

        }
        catch (error) {
            console.log(error)
        }


    }



    return (
        <>
            <section className='p-4 '>
                <Navbar2 />
                <div className="2xl:mt-40 mt-24 2xl:mb-16 xl:mt-24 xl:mb-16 md:mt-24 md:mb-16 lg:mt-24 lg:mb-16   mb-12 sm:mt-24 sm:mb-14  ">
                    <div className='m-auto 2xl:w-2/5 w-full md:w-4/5 lg:w-2/3 xl:w-2/4 '>
                        <h3 className='text-3xl font-xl'>
                            Share some basics about your place
                        </h3>
                        <h6 className='text-ash2 '>You'll add more details later, like bed types.</h6>

                    </div>
                    <div className='m-auto 2xl:w-2/5 w-full md:w-4/5  lg:w-2/3 xl:w-2/4'>
                        <div className='d-flex justify-between items-center border-b-2 h-20 mt-10 ' >
                            <h5>Guests</h5>
                            <div className='d-flex gap-3 '>
                                <div className='w-8 rounded-full h-8 border d-flex justify-center items-center cursor-pointer' onClick={() => handleDecrease("guest")}>-</div>
                                <div >{detailNum.guest}</div>
                                <div className='w-8 rounded-full cursor-pointer h-8 border d-flex justify-center items-center' onClick={() => handleiIncrease("guest")}>+</div>
                            </div>
                        </div>
                        <div className='d-flex justify-between border-b-2 h-20 items-center  '>
                            <h5>Bedrooms</h5>
                            <div className='d-flex gap-3'>
                                <div className='w-8 rounded-full h-8 border d-flex justify-center items-center cursor-pointer' onClick={() => handleDecrease("bedroom")}>-</div>
                                <div>{detailNum.bedroom}</div>
                                <div className='w-8 rounded-full h-8 border d-flex justify-center items-center cursor-pointer' onClick={() => handleiIncrease("bedroom")}>+</div>
                            </div>
                        </div>
                        <div className='d-flex justify-between border-b-2 h-20 items-center  '>
                            <h5>Bed</h5>
                            <div className='d-flex gap-3'>
                                <div className='w-8 rounded-full h-8 border d-flex justify-center items-center cursor-pointer' onClick={() => handleDecrease("bed")}>-</div>
                                <div>{detailNum.bed}</div>
                                <div className='w-8 rounded-full h-8 border d-flex justify-center items-center cursor-pointer' onClick={() => handleiIncrease("bed")}>+</div>
                            </div>
                        </div>
                        <div className=' d-flex justify-between  h-20 items-center'>
                            <h5>Bathrooms</h5>
                            <div className='d-flex gap-3'>
                                <div className='w-8 rounded-full h-8 border d-flex justify-center items-center cursor-pointer' onClick={() => handleDecrease("bathroom")}>-</div>
                                <div >{detailNum.bathroom}</div>
                                <div className='w-8 rounded-full h-8 border d-flex justify-center items-center cursor-pointer' onClick={() => handleiIncrease("bathroom")}>+</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div style={{ padding: "3px", background: "rgb(221, 221, 221)" }}>
            </div>
            <Footer2 isEnabled={true} link1="/become-a-host/privacy-type" onClick={uploadDetailNum} />
        </>
    )
}
export default Floorplan