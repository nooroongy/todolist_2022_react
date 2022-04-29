<<<<<<< HEAD
const Modal = ({ children, show, setter}) => {
    const closeBtnClick = () => {
        setter(false)
    }

    return <div className={`modal__wrap ${show ? 'modal__open' : ''}`}>
=======
const Modal = ({ children,setShowModal,show }) => {
    return <div className={`modal__wrap ${show ? 'modal__open' : ''} `}>
>>>>>>> 1475b2312c56495a6e982d90efc5c68488be2f16
        {children}
        <button className="modal__closeBtn" onClick={closeBtnClick}><i>close</i></button>
    </div>
}

export default Modal;