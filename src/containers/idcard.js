import { useState } from "@hookstate/core"
import { useEffect, useRef } from "react"
import { BiChevronDown } from "react-icons/bi"
import { getIdCard } from "../services/restClient"
import store from "../store/store"

const Idcard = () => {
    const imageRef = useRef(null)
    const { frontId, backId, loading } = useState(store)
    const rotateImage = useState(false)
    const imageToggle = useState(true)
    useEffect(() => {
        getIdCard(true)
        getIdCard(false)
        // imageRef.current.addEventListener("animationend", imageRotation)
        // return () => {
        //     imageRef.current.removeEventListener("animationend", imageRotation)
        // }
    }, [])

    if (loading.get()) {
        return(
            <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-sky-200 rounded-full animate-spin"></div>
        </div>)
    }

    const imageRotation = () => {
        // rotateImage.set(true)
        imageToggle.set(!imageToggle.get())
    }

    let image
    if (imageToggle.get()) {
        const front = frontId['someId']?.frontImage?.get()
        image = <img className={`${rotateImage.get() ? "rotate-180" : ""}`} ref={imageRef} src={`data:image/png;base64, ${front}`} alt="idcard front" />
    } else {
        const back = backId['someId']?.backImage?.get()
        image = <img className={`${rotateImage.get() ? "rotate-180" : ""}`} ref={imageRef} src={`data:image/png;base64, ${back}`} alt="idcard back" />
    }
    return (
        <>
            <div className="group outline-none accordion-section" tabIndex="1">
                <div
                    className="group bg-gray-100 flex justify-between px-4 py-3 items-center text-sky-400 transition ease duration-500 cursor-pointer pr-10 relative"
                >
                    <div className="group-focus:text-sky-400 transition ease duration-500">
                        ID Card (Click image to view other side)
                    </div>
                    <div
                        className="h-8 w-8 border border-sky-400 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-sky-400 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"
                    >
                        <BiChevronDown size={32} />
                    </div>
                </div>
                <div
                    className="group-focus:max-h-screen max-h-0 bg-gray-100 px-4 overflow-hidden ease duration-500 "
                >
                    <p className="p-2 text-sky-400 text-justify " onClick={() => { imageRotation() }}>
                        {image}
                    </p>
                </div>
            </div>

        </>
    )
}

export default Idcard