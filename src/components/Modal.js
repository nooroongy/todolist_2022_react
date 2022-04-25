import styled  from "styled-components";

const Modal = ({ children }) => {
    const Button = styled.button`
        background:red;
    `

    return <div className="modal__wrap">
        {children}
        <Button>asd</Button>
    </div>
}

export default Modal;