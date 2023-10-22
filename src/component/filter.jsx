
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMultiply } from '@fortawesome/free-solid-svg-icons'
import httpAuth from '../utils/http'
import { BsBuildings, BsHouse, BsHouses } from "react-icons/bs";
import { TbBuildingHospital } from "react-icons/tb";
import { MdOutlineWarehouse } from "react-icons/md";
import { Link } from '@mui/material'
// import httpClient from "../Services/httpclient";
export default function Filter() {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    const [minPrice, setMinPrice] = useState(10)
    const [maxPrice, setMaxPrice] = useState(530)
    const [TypeOfPlace, setTypeOfPlace] = useState("")
    const [PlaceDescription, setPlaceDescription] = useState("");
    const [filterProp, setFilterProp] = useState([]);
    const [Amenities, setAmenities] = useState([])
    const [bedrooms, setBedrooms] = useState({ color: 0, qty: "" });
    const [beds, setBeds] = useState({ color: 0, qty: "" });
    const [bathrooms, setBathrooms] = useState({ color: 0, qty: "" });
    const [amenity, setAmenity] = useState({ Wifi: false, Kitchen: false, Washer: false, AirConditioning: false, Pool: false, Tv: false });

    const [loading, setloading] = useState(false);
    let isMounted = true;
    const RoomsAndBedNo = [
        { No: "Any" },
        { No: "1" },
        { No: "2" },
        { No: "3" },
        { No: "4" },
        { No: "5" },
        { No: "6" },
        { No: "7" },
        { No: "8+" },
    ];

    const handleBedroomsColor = (row) => {
        if (row == 0) {
            return setBedrooms({ ...bedrooms, color: row, qty: "" });
        }
        setBedrooms({ ...bedrooms, color: row, qty: row });
        console.log("im here")

    };

    const handleBedColor = (i) => {
        if (i == 0) {
            return setBeds({ ...beds, color: i, qty: "" });
        }
        setBeds({ ...beds, color: i, qty: 1 });
        console.log("im here")

    };

    const handleBathroomColor = (i) => {
        if (i == 0) {
            return setBathrooms({ ...bathrooms, color: i, qty: "" });
        }
        setBathrooms({ ...bathrooms, color: i, qty: i });
        console.log("im here")

    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setloading(true);
                const response = await httpAuth.get(
                    `FilterProperties/getFilteredproperties/?PlaceDescription=${PlaceDescription}&bedrooms=${bedrooms.qty}&beds=${beds.qty}&bathrooms=${bathrooms.qty}&TypeOfPlace=${TypeOfPlace}&Amenities=${Amenities}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
                );
                setFilterProp(response.data.property);
                setloading(false);
            } catch (error) {
                setFilterProp([]);
                setloading(true);
                console.log(error.response.data.message);
            }
        };
        if (isMounted) {
            fetchProperties();
        }
        return () => {
            isMounted = false;
        };
    }, [
        PlaceDescription,
        bedrooms.qty,
        beds.qty,
        bathrooms.qty,
        TypeOfPlace,
        Amenities,
        minPrice,
        maxPrice,
    ]);

    const handleTypeOfPlaceFilter = (e) => {
        if (TypeOfPlace == e.currentTarget.id) {
            setTypeOfPlace("");
            return;
        }
        setTypeOfPlace(e.currentTarget.id);
        console.log("im here")
    };


    const handlePlaceDescriptionFilter = (e) => {
        if (PlaceDescription == e.currentTarget.id) {
            setPlaceDescription("");
            return;

        }
        setPlaceDescription(e.currentTarget.id);
        console.log("working")

    };




    // const { setFilterShow, setFullscreen, setProperty, property } =
    //     useContext(Context);
    // const [avgprice, setavgprice] = useState(0);
    // const [amenity, setAmenity] = useState({ wifi: false, tv: false, kitchen: false, washer: false, airconditioning: false, pool: false, piano: false });



    const handleAmenities = (e) => {
        setAmenity({
            ...amenity,
            [e.currentTarget.id]: !amenity[e.currentTarget.id],
        });

        if (!amenity[e.currentTarget.id]) {
            setAmenities([...Amenities, e.currentTarget.id]);
        } else {
            setAmenities([
                ...Amenitiesmenities.filter((amenity) => amenity !== e.currentTarget.id),
            ]);
        }
    }

    // // calculate average Price
    // useEffect(() => {
    //     let totalPrice = property
    //         .map((prop) => prop.price)
    //         .reduce((total, value) => {
    //             return total + value;
    //         }, 0);
    //     setavgprice(Math.round(totalPrice / property.length));
    // });

    // fetch properties


    // //submit filter
    // const handleSubmitFilter = () => {
    //     setProperty(filterProp);
    //     hideFilter();
    // };

    // //hide filter
    // function hideFilter() {
    //     setFilterShow(false);
    //     setFullscreen(false);
    // }

    const handleClearAll = () => {
        setAmenity({
            wifi: false,
            Airconditioning: false,
            Washer: false,
            Tv: false,
            kitchen: false,
            Pool: false,
        });
        setAmenities([]);
        setPlaceDescription("");
        setTypeOfPlace("");
        setBathrooms({ ...bathrooms, color: 0, qty: "" });
        setBedrooms({ ...bedrooms, color: 0, qty: "" });
        setBeds({ ...beds, color: 0, qty: "" });
        setMinPrice(50);
        setMaxPrice(200);
    };














    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"

                >
                    <div className="fixed inset-0 bg-gray-500  bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed  inset-0 z-10 w-screen top-0 overflow-y-auto">
                    <div className="flex min-h-full p-0 items-end justify-center p-4  sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            {/* shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg */}
                            <Dialog.Panel className="relative   lg:overflow-y-auto overflow-y-auto lg:w-8/12 w-full  border-2 lg:h-[500px]  h-[800px] bg-white  transform  rounded-lg transition-all ">
                                <div className="relative p-2">
                                    <div className='flex w-full justify-between  p-4'>
                                        <span><FontAwesomeIcon icon={faMultiply} size="xl" onClick={() => setOpen(false)} className='cursor-pointer font-thin' ref={cancelButtonRef} /></span>
                                        <Dialog.Title as="h3" className=" text-xl text-gray-900 ">
                                            Filter
                                        </Dialog.Title>
                                        <div></div>
                                    </div>
                                    <hr />


                                    <div className='mt-4 p-4 '>
                                        <h4 className='lg:text-3xl text-2xl font-medium'>Price </h4>
                                        <div className='flex justify-center mb-5 mt-3   '>
                                            <div className='lg:w-[350px] w-40 rounded-xl border-2  p-2'>
                                                <h3>Minimum</h3>
                                                <div className='flex'>
                                                    <p>$</p>
                                                    <input defaultValue={minPrice} onChange={(e) => { setMinPrice(e.target.value) }} className='  focus:outline-none' />
                                                </div>
                                            </div>
                                            <div className='lg:w-[100px] w-2   flex justify-center items-center'><span className='text-2xl'>-</span></div>
                                            <div className='lg:w-[350px]  w-40 rounded-xl border-2 p-2  '>
                                                <h3>Maximum</h3>
                                                <div className='flex w-full'>
                                                    <p>$</p>
                                                    <input defaultValue={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className='focus:outline-none' ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className='p-4 '>
                                    <h3 className='text-2xl font-medium'>Rooms and beds</h3>
                                    <div className=''>
                                        <p className='text-lg mt-4'>Bedrooms</p>
                                        <div className='flex  lg:space-x-3 space-x-2 mt-3  removeScrollbar overflow-auto'>
                                            {RoomsAndBedNo.map((Num, index) => (
                                                <button
                                                    type="button"
                                                    className="w-[80px] p-6 h-[30px] flex rounded-pill cursor-pointer border-2 justify-center items-center"
                                                    key={index}
                                                    onClick={() => handleBedroomsColor(index)}
                                                    style={{
                                                        backgroundColor: index === bedrooms.color ? "black" : "",
                                                        color: index === bedrooms.color ? "white" : "",
                                                    }}
                                                >
                                                    {Num.No}
                                                </button>
                                            ))}
                                        </div>
                                    </div>




                                    <div>
                                        <p className='text-xl mt-4 '>Bed</p>
                                        <div className='flex  lg:space-x-3 space-x-2  mt-3  removeScrollbar overflow-auto'>

                                            {RoomsAndBedNo.map((Num, index) => (
                                                <button
                                                    type="button"
                                                    className="w-[80px] p-6 h-[30px] flex rounded-pill cursor-pointer border-2 justify-center items-center"
                                                    key={index}
                                                    onClick={() => handleBedColor(index)}
                                                    style={{
                                                        backgroundColor: index === beds.color ? "black" : "",
                                                        color: index === beds.color ? "white" : "",
                                                    }}
                                                >
                                                    {Num.No}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='mb-5'>
                                        <p className='text-xl mt-4  '>Bathrooms</p>
                                        <div className='flex  lg:space-x-3 space-x-2   mt-3 removeScrollbar overflow-auto'>
                                            {RoomsAndBedNo.map((Num, index) => (
                                                <button
                                                    type="button"
                                                    className="w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center cursor-pointer"
                                                    key={index}
                                                    onClick={() => handleBathroomColor(index)}
                                                    style={{
                                                        backgroundColor: index === bathrooms.color ? "black" : "",
                                                        color: index === bathrooms.color ? "white" : "",
                                                    }}
                                                >
                                                    {Num.No}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className='p-4 '>
                                    <h3 className='text-2xl inline-block font-medium'>Property type</h3>
                                    <div className=' flex gap-4  mt-4 inline-block  removeScrollbar overflow-auto '>
                                        <div
                                            id="House"
                                            className={`w-[220px] h-[150px] border-2 cursor-pointer rounded-xl p-4   ${PlaceDescription == "House" && "border-black"
                                                }`}
                                            onClick={handlePlaceDescriptionFilter} >
                                            <img className='w-[30px]' src='/navimages/manshions.jpg'></img>

                                            <span className='block mt-12 text-xl'>House</span>
                                        </div>
                                        <div
                                            id="Cabin"
                                            className={`w-[220px] h-[150px] cursor-pointer border-2 rounded-xl p-4
                                             ${PlaceDescription == "Cabin" && "border-black"
                                                }`}
                                            onClick={handlePlaceDescriptionFilter} >

                                            <img className='w-[30px]' src='/navimages/cabins.jpg'></img>

                                            <span className='block mt-12 text-xl'>Cabin</span>
                                        </div>
                                        <div
                                            id="Lake"
                                            className={`w-[220px] h-[150px] border-2 cursor-pointer rounded-xl cursor-pointer p-4
                                          ${PlaceDescription == "Lake" && "border-black"
                                                }`}
                                            onClick={handlePlaceDescriptionFilter}>
                                            <img className='w-[30px]' src='/navimages/beachfont.jpg'></img>

                                            <span className='block mt-12 text-xl'>Lake</span>
                                        </div>
                                        <div
                                            id="Castle"
                                            className={`w-[220px] h-[150px] border-2 cursor-pointer rounded-xl p-4 mb-5
                                      ${PlaceDescription == "Castle" && "border-black"
                                                }`}
                                            onClick={handlePlaceDescriptionFilter}>
                                            <img className='w-[30px]' src='/navimages/castles.jpg'></img>
                                            <span className='block mt-12 text-xl'>Castle</span></div>
                                    </div>
                                    <hr />

                                </div>

                                <div className='p-4'>
                                    <h3 className='text-2xl font-medium'>Amenities</h3>
                                    <h4 className='text-xl mt-3'>Essentials</h4>
                                    <div className='flex flex-wrap lg:no-wrap gap-y-5 items-center mt-3 lg:gap-40 mb-5'>
                                        <div className=' space-y-9  '>
                                            <div className='flex item-center gap-3 cursor-pointer '>
                                                <input type="checkbox"
                                                    id="Wifi"
                                                    checked={amenity.Wifi == true ? true : false}
                                                    onChange={handleAmenities}
                                                    className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Wifi</label>
                                            </div>
                                            <div className='flex item-center gap-3 cursor-pointer'>
                                                <input type="checkbox"
                                                    id="Washer"
                                                    checked={amenity.Washer == true ? true : false}
                                                    onChange={handleAmenities}
                                                    className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Washer</label>
                                            </div>
                                            <div className='flex item-center w-full cursor-pointer gap-3'>
                                                <input type="checkbox"
                                                    id="Washer"
                                                    checked={amenity.AirConditioning == true ? true : false}
                                                    onChange={handleAmenities}
                                                    className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>AirConditioning</label>
                                            </div>
                                        </div>

                                        <div className='space-y-9 '>
                                            <div className='flex item-center gap-3 cursor-pointer'>
                                                <input type="checkbox"
                                                    id="Kitchen"
                                                    checked={amenity.Kitchen == true ? true : false}
                                                    onChange={handleAmenities}
                                                    className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Kitchen</label>
                                            </div>
                                            <div className='flex item-center gap-3 cursor-pointer'>
                                                <input type="checkbox"
                                                    id="Pool"
                                                    checked={amenity.Pool == true ? true : false}
                                                    onChange={handleAmenities}
                                                    className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Pool</label>
                                            </div>
                                            <div className='flex item-center gap-3 cursor-pointer'>
                                                <input type="checkbox"
                                                    id="Tv"
                                                    checked={amenity.Tv == true ? true : false}
                                                    onChange={handleAmenities}
                                                    className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Tv</label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div className='p-4 space-y-4'>
                                    <h3 className='text-2xl font-medium'>Type of place</h3>

                                    <div className=' text-xl'>
                                        <p>Entire place</p>
                                        <div className='flex justify-between flex-shrink-0 '>
                                            <label htmlFor="An entire place" className='text-sm'>A place to yourself</label>
                                            <input type="checkbox"
                                                className='w-7 h-7 flex-shrink-0 cursor-pointer'
                                                id="An entire place"
                                                checked={TypeOfPlace == "An entire place" ? true : false}
                                                onChange={handleTypeOfPlaceFilter}
                                            />

                                        </div>
                                    </div>
                                    <div className=' text-xl ' >
                                        <p>Private room</p>
                                        <div className='flex justify-between flex-shrink-0'>
                                            <label htmlFor="A private room" className='text-sm'>Your own room in a home or a hotel, plus some shared common spaces</label>
                                            <input type="checkbox"
                                                id="A private room"
                                                checked={TypeOfPlace == "A private room" ? true : false}
                                                onChange={handleTypeOfPlaceFilter}
                                                className='w-7 h-7 flex-shrink-0 cursor-pointer' />

                                        </div>
                                    </div>
                                    <div className='mb-5 text-xl'>
                                        <p>shared room</p>
                                        <div className='flex justify-between flex-shrink-0 '>
                                            <label htmlFor="A shared room" className='text-sm'>A sleeping space and common areas that may be shared with others</label>
                                            <input type="checkbox"
                                                id='A shared room'
                                                checked={TypeOfPlace == "A shared room" ? true : false}
                                                onChange={handleTypeOfPlaceFilter}
                                                className='w-7 h-7 flex-shrink-0 cursor-pointer' />
                                        </div>
                                    </div>
                                    <hr />
                                </div>



                                <div className='p-4'>
                                    <h3 className='text-2xl'>Host Language</h3>
                                    <div className='flex items-center mt-3 gap-40 mb-5'>
                                        <div className=' space-y-9 w-full'>
                                            <div className='flex item-center  justify-between'>
                                                <label htmlFor="">English</label>
                                                <input type="checkbox" className='w-7 h-7 cursor-pointer' />
                                            </div>
                                            <div className='flex item-center justify-between'>
                                                <label htmlFor="" >French</label>
                                                <input type="checkbox" className='w-7 h-7 cursor-pointer' />
                                            </div>
                                            <div className='flex item-center justify-between'>
                                                <label htmlFor="">Spanish</label>
                                                <input type="checkbox" className='w-7 h-7 cursor-pointer' />
                                            </div>
                                            <div className='flex item-center justify-between'>
                                                <label htmlFor="">Germany</label>
                                                <input type="checkbox" className='w-7 h-7 cursor-pointer' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*    p-3 lg:hidden  text-center  */}
                                <div className="bg-white  sticky  w-full bottom-0 flex items-center justify-between left-0 border-top p-4 ">

                                    <Link onClick={handleClearAll}>
                                        Clear all
                                    </Link>

                                    <button
                                        type="button"
                                        className=" w-[200px] p-2  rounded-md text-white text-sm bg-black "
                                    >
                                        Show {filterProp.length} places
                                    </button>



                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
