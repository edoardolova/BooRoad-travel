import { useEffect } from "react";

export default function Modal({ title, children, onClose }) {
    // Chiudi con ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape"){
                onClose();
            } 
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Chiudi cliccando sull'overlay
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal")) {
            onClose();
        }
    };

    return (
        <>
            {/* Overlay (sta dietro) */}
            <div className="modal-backdrop fade show"></div>

            {/* Contenitore modale */}
            <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
                onClick={handleOverlayClick}
            >
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
