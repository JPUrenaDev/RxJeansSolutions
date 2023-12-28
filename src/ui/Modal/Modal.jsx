import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createContext } from "react";
import { useContext } from "react";
import { cloneElement } from "react";

const ModalContext = createContext("");
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const ModalW = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <ModalContext.Provider value={{ setOpen, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children }) => {
  const { setOpen, open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      setOpen(!open);
    },
  });
};

const Windows = ({ children }) => {
  console.log(children);
  const { setOpen, open } = useContext(ModalContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!open) return null;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title">1</Typography>
        <Typography id="modal-modal-description">
          {children ? cloneElement(children, { handleClose: handleClose }) : 1}
        </Typography>
      </Box>
    </Modal>
  );
};
ModalW.Open = Open;
ModalW.Windows = Windows;
