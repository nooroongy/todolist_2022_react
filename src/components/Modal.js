const Modal = ({ children, show, setter}) => {
    const closeBtnClick = () => {
        setter(false)
    }

    return <div className={`modal__wrap ${show ? 'modal__open' : ''}`}>
        {children}
        <button className="modal__closeBtn" onClick={closeBtnClick}><i>close</i></button>
    </div>
}

export default Modal;