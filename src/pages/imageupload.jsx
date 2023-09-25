import axios, { Axios } from "axios"
import { useEffect, useRef, useState } from "react"
import { json } from "react-router-dom"
import cors from "cors"
// import http from "../api/http"
// import http from "../api/http"
cors()


function Imageupload() {



    return (
        <>
            <div style={{ width: "300px" }}>
                {/* <input ref={rating} name="rating" className="form-control" />
                <input ref={email} name="email" className="form-control" />
                <input ref={email} name="email" type="email" className="form-control" />
                <input ref={email} name="email" type="email" className="form-control" /> */}

                <input name="file" accept=".JPEG,.jpg " type="file" onChange={(e) => oninput(e, e.target.files)} className="form-control" />
            </div>
            <button onClick={(e) => uploadImages(e)}>upload</button>

            <img src={imagesrc} alt="" />



            <p>my email is </p>
        </>

    )
}
export default Imageupload