import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const customStyles = {
  content: {
    zIndex: 90,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalContainerDiv = styled.div`
  z-index: 90;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

const ModalButton = styled.button`
  padding: 2px 10px;
  border-radius: 4px;

  margin-bottom: 11px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: #343a3f;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.14);

  font-family: Spoqa Han Sans;
  font-style: normal;
  font-size: 16px;
  line-height: 25px;

  color: #ffffff;
`;

function ModalContainer() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContainerDiv>
      <ModalButton onClick={openModal}>info</ModalButton>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <div>I am a modal</div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </ModalContainerDiv>
  );
}

export default ModalContainer;
