import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

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

const ModalDiv = styled.div`
  zindex: 90;
  width: 60vw;
  height: 60vh;

  background: #f2f4f8;
  backdrop-filter: blur(32px);
`;

function ModalContainer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalContainerDiv>
      <ModalButton onClick={handleOpen}>info</ModalButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        className={classes.modal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalDiv></ModalDiv>
        </Fade>
      </Modal>
    </ModalContainerDiv>
  );
}

export default ModalContainer;
