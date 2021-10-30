import React from "react";
import BtnWhatsapp from "./BtnWhatsapp";
import Logo from "./Logo";

const Footer = () => {
    return (
        <div className='p-4 bg-gray-200 sm:flex justify-between items-center'>
                <h5 className='font-bold text-2xl'>Fran di Carvalho<br />Monte Carmelo MG</h5>
                <div>
                    <BtnWhatsapp />
                </div>
            </div>
    )
}

export default Footer