import React from 'react';
import './styles.css';
import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import img from '../assets/img.png';
import selo from '../assets/selo.jpg'
import mae from '../assets/mae.png';
import { graphql, useStaticQuery } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';

const Hero = () => {
    return (
        <div className='flex flex-col items-center sm:flex-row sm:justfy-between'>
            <div>
                <h2 className='font-bold text-2xl'>Consultoria e Higine do Sono.</h2>
                <p className='text-xl'>Consultoria do Sono Infantil.
                    <br />Aprenda tecnicas para melhorar o sono do seu bebe,
                    atraves da higiene do sono e outras tecnicas.
                    <br />Ganhe mais tempo para dormir,
                    tire o seu tempo como mulher,
                    voce merece!</p>
                <p className='text-gray-600'>Atendemos paises da America Latina, Espanha e Portugal.</p>
            </div>
            <div>
                <img src={img} alt='Bebe'></img>
            </div>
        </div>
    )
}

const Index = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const selos = [1, 2, 3, 4]
    const depoimentos = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            <Helmet>
                <title>{siteMetadata.title}</title>
            </Helmet>
            
            <Header>
                <Logo />
                <div>
                    <BtnWhatsapp />
                </div>
            </Header>
            <Hero />
            <div className='flex flex-col items-center sm:flex-row justify-around'>
                {
                    selos.map(() => {
                        return <img className='md:w-auto h-12 items-stretch m-4' src={mae} />
                    })
                }
            </div>
            <h2 className='p-8 text-2xl font-bold text-center italic underline text-4xl'>
                Cases de sucesso.
            </h2>
            <div className='flex flex-wrap'>
                {depoimentos.map(() => {
                    return (
                        <div className='max-w-sm'>
                            <div className='m-2 rounded shadow-lg'>
                                <img src={selo}/>
                                <div className='px-6 py-4'>
                                    <p className='font-bold text-xl mb-2 text-center'>Depoimentos</p>
                                    <p className='text-center'>Josefa Margareth</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>            
            <Footer />           
            
        </div>

    )
}

export default Index