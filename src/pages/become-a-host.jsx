import { faCloudUpload, faGreaterThan, faHome, faHomeAlt, faHomeLgAlt, faHomeUser, faHouseMedicalCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import '../css/listingpage.css'
import { Link, Outlet } from 'react-router-dom'
import Listings from '../component/listings'
import Navbar2 from '../component/navbar2'
import Defaultnav1 from '../layouts/defaultnav1'
import { Context } from '../provider/context'
import httpAuth from '../utils/http'



function BecomeAHost() {
    const [parent, setparent] = useState(true)
    const [showContent, setShowContent] = useState(false);
    const { setUser, user } = useContext(Context);
    let isMounted = true;

    useEffect(() => {
        const fetchUser = async () => {
            console.log("res")
            try {
                const response = await httpAuth.get("/user/getuser");
                setUser(response.data.user);
            } catch (error) {
                console.log(error)
            }
        };

        if (isMounted) {
            fetchUser();
        }
        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        })
        return () => clearTimeout(timer);
    }, []);

    const handleclick = () => {
        setparent(false)
    }

    return (

        <section className={`${showContent ? 'show' : ''}`}>
            {parent && <>
                <Navbar2 />
                <div className='p-6 m-auto pt-32 2xl:pt-24 w-full lg:w-2/3 sm:w-full md:w-5/6  2xl:w-1/2'>
                    <h1 className='lg:text-2xl md:text-3xl mb-4  2xl:text-3xl'> Welcome back,{user?.firstname} {user?.lastname}</h1>
                    <h3 className='mb-2 text-xl'>Finish your listing</h3>

                    <Listings name="Your  listing started march,2023" />
                    <Listings name="Your  listing started march,2023" />
                    <Listings name="Your unique space listing started march,2023" />
                    <h3 className='mt-12 text-2xl font-semibold'>Start a new listing</h3>
                    <Link to="/become-a-host/overview" className='text-black' onClick={handleclick} style={{ textDecoration: "none" }} >
                        <div className=" w-full  md:border-b-2 border-b-[rgb(221,221,221)] flex mt-3 justify-between items-center pb-4">
                            <div className='flex items-center'>
                                <FontAwesomeIcon className='text-3xl' icon={faHomeLgAlt}></FontAwesomeIcon>
                                <h3 className='ml-5'>Create a new listing</h3>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
                            </div>
                        </div> </Link>
                    <div className='w-full md:border-b-2 border-b-[rgb(221,221,221)] flex mt-3 justify-between items-center pb-4'>
                        <div className='flex items-center'>
                            <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faHomeUser}></FontAwesomeIcon>
                            <h3 className='ml-5'>Duplicate an existing listing</h3>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>

            </>}

            {parent == false && < Outlet />}
        </section>

    )
}
export default BecomeAHost