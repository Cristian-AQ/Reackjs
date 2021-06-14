import React, {Fragment} from 'react';

const Comentario = ({sujeto}) => {
    return ( 
        <Fragment>
            <h1>COMENTARIO</h1>
            <hr />
            <div className='media'>
                <video src={sujeto.video} controls width={480}></video>
                <div>
                    <img src={sujeto.imagen} width={480} alt='T' />
                </div>
                <div>
                    <h5>{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
     );
}
 
export default Comentario;