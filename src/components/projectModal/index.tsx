import React, { MouseEventHandler } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css'

export default function ProjectModal(props: { isOpen: boolean, images: string[], onRequestClose: MouseEventHandler, title: string }) {
    const { isOpen, images, onRequestClose } = props;
    console.log(images, typeof images, Array.isArray(images), onRequestClose)
    Modal.setAppElement("#home")
    return (
        <Modal className="m-10 p-5 bg-zinc-900 carousel-modal" isOpen={isOpen} >
            <h1>{props.title}</h1>
            <div className="carousel-wrapper">

                <Carousel className='mt-5 mx-auto carousel'>
                    {images.map((image, index) => (
                        <div key={index} className='carousel-slide'>
                            <img src={image} alt={`Slide ${index}`} className='carousel-image h-full' />
                        </div>
                    ))}
                </Carousel>
            </div>
            <button className='bg-zinc-500 px-4 py-2 rounded ms-5 mb-5' onClick={onRequestClose}>Fechar</button>
        </Modal>
    )
};

