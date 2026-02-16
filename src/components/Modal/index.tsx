import { FC, ReactElement } from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactElement;
}

export default function Modal(props: ModalProps): ReturnType<FC> {
    return (
        <div className={`${"modal"} ${props.open ? "fade show" : "d-none"}`}>
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5>Product Details</h5>
                        <button type="button" className="closebtn" onClick={props.onClose}><img src={`${process.env.PUBLIC_URL}/images/icons/cross-dark.svg`} alt="Cross" /></button>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                </div>
            </div>
        </div>
    );
}