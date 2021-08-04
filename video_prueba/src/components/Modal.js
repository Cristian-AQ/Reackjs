import React from 'react'
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
const Modal = ({
    children,
    estado,
    cambiarEstado,
    mostrarHeader,
    mostrarOverlay,
    posicionModal,
    padding
}) => {
    return ( 
        <>
            {estado &&
            <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
                <ContenedorModal padding={padding}>
                    {mostrarHeader &&
                        <EncabezadoModal>
                            <h3>GAAAA</h3>
                        </EncabezadoModal>
                    }
                    <BotonCerrar onClick={()=>cambiarEstado(false)}>
                        <CloseIcon/>
                    </BotonCerrar>
                    {children}
                </ContenedorModal>
            </Overlay>
            }
        </>
     );
}
 
export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${props =>props.mostrarOverlay ? 'rgba(0,0,0,.5)':'rgba(0,0,0,0)'} ;
    display: flex;
    padding: 5xp;
    align-items: ${props => props.posicionModal ? props.posicionModal : 'center'};
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    height: 250px;
    position: relative;
    background: #fff;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px; 
    padding: ${props => props.padding ? props.padding : '20px'};
`;
const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-botton: 20px;
    padding-botton: 20px;
    border-botton: 1px solid #E8E8E8;

    h3{
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }
`;
const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover{
        background: #F2F2F2;
    }

    CloseIcon{
        width: 100%;
        height: 100%;
    }
`;