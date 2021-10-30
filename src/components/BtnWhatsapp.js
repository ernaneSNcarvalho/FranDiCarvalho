import React from 'react';
import wa from '../assets/btn-whatsapp.png';

const BtnWhatsapp = () => {
    return (
        <div className="justify-items-start bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex">
            <img className='md:w-auto h-12 items-stretch' src={wa} alt='whatsapp' />
            <div className='ml-2'>
                <h3 className="font-bold text-2xl">Orcar sua consultoria!</h3>
                <p className="text-xs">Agende uma entrevista gratuito.</p>
                <p className="font-bold">(34) 98426-2755</p>
            </div>
        </div>
    )
}

export default BtnWhatsapp