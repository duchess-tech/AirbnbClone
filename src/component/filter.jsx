
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMultiply } from '@fortawesome/free-solid-svg-icons'

export default function Filter() {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    const [min, setMin] = useState(10)
    const [max, setMax] = useState(530)

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
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed  inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full  scroll  items-end justify-center p-4  sm:items-center sm:p-0">
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
                            <Dialog.Panel className="relative   overflow-y-auto lg:w-8/12 w-full  border-2  h-[500px]  bg-white  transform  rounded-lg transition-all ">
                                <div className="relative">
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
                                                    <input defaultValue={min} className='  focus:outline-none' />

                                                </div>
                                            </div>
                                            <div className='lg:w-[100px] w-2   flex justify-center items-center'><span className='text-2xl'>-</span></div>
                                            <div className='lg:w-[350px]  w-40 rounded-xl border-2 p-2  '>
                                                <h3>Maximum</h3>
                                                <div className='flex w-full'>
                                                    <p>$</p>
                                                    <input defaultValue={530} className='focus:outline-none' ></input>
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
                                            <div className='w-[100px] p-6 h-[30px] border-black flex rounded-pill bg-black text-white border-2 justify-center items-center'>
                                                <span className=''>Any</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span >1</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>2</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>3</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>4</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>5</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>6</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>7</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>8+</span>
                                            </div>
                                        </div>
                                    </div>




                                    <div>
                                        <p className='text-xl mt-4 '>Bed</p>
                                        <div className='flex  lg:space-x-3 space-x-2  mt-3  removeScrollbar overflow-auto'>
                                            <div className='w-[100px] p-6 h-[30px] border-black flex rounded-pill bg-black text-white border-2 justify-center items-center'>
                                                <span className=''>Any</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span >1</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>2</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>3</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>4</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>5</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>6</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>7</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>8+</span>
                                            </div>
                                        </div>
                                    </div>



                                    <div className='mb-5'>
                                        <p className='text-xl mt-4  '>Bathrooms</p>
                                        <div className='flex  lg:space-x-3 space-x-2   mt-3 removeScrollbar overflow-auto'>
                                            <div className='w-[100px] p-6 h-[30px] flex rounded-pill border-black bg-black text-white border-2 justify-center items-center'>
                                                <span className=''>Any</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span >1</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>2</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>3</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>4</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>5</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>6</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>7</span>
                                            </div>
                                            <div className='w-[80px] p-6 h-[30px] flex rounded-pill border-2 justify-center items-center'>
                                                <span className=''>8+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className='p-4 '>
                                    <h3 className='text-2xl inline-block font-medium'>Property type</h3>
                                    <div className=' flex gap-4  mt-4 inline-block  removeScrollbar overflow-auto '>
                                        <div className='w-[220px] h-[150px] border-2 rounded-xl p-4 '>
                                            <FontAwesomeIcon icon={faHouse} size="2x" className='block' />
                                            <span className='block mt-12 text-xl'>House</span></div>
                                        <div className='w-[220px] h-[150px] border-2 rounded-xl p-4 '>
                                            <FontAwesomeIcon icon={faHouse} size="2x" className='block' />
                                            <span className='block mt-12 text-xl'>Cabin</span></div>
                                        <div className='w-[220px] h-[150px] border-2 rounded-xl p-4 '>
                                            <FontAwesomeIcon icon={faHouse} size="2x" className='block' />
                                            <span className='block mt-12 text-xl'>Lake</span></div>
                                        <div className='w-[220px] h-[150px] border-2 rounded-xl p-4 mb-5'>
                                            <FontAwesomeIcon icon={faHouse} size="2x" className='block' />
                                            <span className='block mt-12 text-xl'>Castle</span></div>
                                    </div>
                                    <hr />

                                </div>

                                <div className='p-4'>
                                    <h3 className='text-2xl font-medium'>Amenities</h3>
                                    <h4 className='text-xl mt-3'>Essentials</h4>
                                    <div className='flex flex-wrap lg:no-wrap gap-y-5 items-center mt-3 lg:gap-40 mb-5'>
                                        <div className=' space-y-9  '>
                                            <div className='flex item-center gap-3 '>
                                                <input type="checkbox" className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Wifi</label>
                                            </div>
                                            <div className='flex item-center gap-3'>
                                                <input type="checkbox" className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Washer</label>
                                            </div>
                                            <div className='flex item-center w-full  gap-3'>
                                                <input type="checkbox" className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Air connditioning</label>
                                            </div>
                                        </div>

                                        <div className='space-y-9 '>
                                            <div className='flex item-center gap-3'>
                                                <input type="checkbox" className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Kitchen</label>
                                            </div>
                                            <div className='flex item-center gap-3'>
                                                <input type="checkbox" className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Dryer</label>
                                            </div>
                                            <div className='flex item-center gap-3'>
                                                <input type="checkbox" className='w-7 h-7' />
                                                <label htmlFor="" className='text-xl'>Heating</label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div className='p-4 space-y-4'>
                                    <h3 className='text-2xl font-medium'>Type of place</h3>

                                    <div className=' text-xl'>
                                        <p>Entire place</p>
                                        <div className='flex justify-between  '>
                                            <p className='text-sm'>A place to yourself </p>
                                            <input type="checkbox" className='w-7 h-7 flex-shrink-0' />

                                        </div>
                                    </div>
                                    <div className=' text-xl ' >
                                        <p>Private room</p>
                                        <div className='flex justify-between flex-shrink-0'>
                                            <p className='text-sm  '> Your own room in a home or a hotel, plus some shared common spaces</p>
                                            <input type="checkbox" className='w-7 h-7 flex-shrink-0' />

                                        </div>
                                    </div>
                                    <div className='mb-5 text-xl'>
                                        <p>shared room</p>
                                        <div className='flex justify-between flex-shrink-0 '>
                                            <p className='text-sm'>A sleeping space and common areas that may be shared with others</p>
                                            <input type="checkbox" className='w-7 h-7 flex-shrink-0' />
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
                                                <input type="checkbox" className='w-7 h-7' />
                                            </div>
                                            <div className='flex item-center justify-between'>
                                                <label htmlFor="" >French</label>
                                                <input type="checkbox" className='w-7 h-7' />
                                            </div>
                                            <div className='flex item-center justify-between'>
                                                <label htmlFor="">Spanish</label>
                                                <input type="checkbox" className='w-7 h-7' />
                                            </div>
                                            <div className='flex item-center justify-between'>
                                                <label htmlFor="">Germany</label>
                                                <input type="checkbox" className='w-7 h-7' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6  absolute bottom-0  w-full">
                                    <button></button>
                                    <button
                                        type="button"
                                        className="mt-3   inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Cancel
                                    </button>
                                </div> */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
