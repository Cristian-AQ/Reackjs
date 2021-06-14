import React,{ useState,Fragment }  from 'react';
import {Carousel,CarouselItem,Modal} from 'react-bootstrap'
//const [show, setShow] = useState(true);

const Index = ({sujeto}) => {
    return ( 
        <Fragment>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>
                        REGISTRO
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <input
                        type='text'
                        placeholder='USERNAME'
                        name='user'/>
                        <input
                        type='email'
                        placeholder='E-MAIL'
                        name='email'/>
                        <input
                        type='password'
                        placeholder='PASSWORD'
                        name='password'/>
                        <button
                        type='submit'
                        >REGISTRAR</button>
                    </form>
                </Modal.Body>
            </Modal.Dialog>
            <Carousel>
                <CarouselItem>
                    <img 
                    className='d-block w-100'
                    src={sujeto.imagen1} 
                    alt="Tohru1" />
                    <Carousel.Caption>
                        <h3>Tohru1</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img 
                    className='d-block w-100'
                    src={sujeto.imagen2} 
                    alt="Tohru2" />
                    <Carousel.Caption>
                        <h3>Tohru2</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <video
                    className='d-block w-100'
                    src={sujeto.video} 
                    alt="Isabel"
                    controls />
                    <Carousel.Caption>
                        <h3>Isabel</h3>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </Fragment>
     );
}
export default Index;