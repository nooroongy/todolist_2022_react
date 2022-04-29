const Modal = ({ children,setShowModal,show }) => {
    return <div className={`modal__wrap ${show ? 'modal__open' : ''} `}>
        {children}
    </div>
}

export default Modal;