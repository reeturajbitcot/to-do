import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../../store/slice/toDoSlice";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

function DeleteTaskModal({ handleDeleteModalClose, data, setOpenSnackbar }) {
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    dispatch(deleteToDo({ id }));
    setOpenSnackbar(true);
    handleDeleteModalClose();
  };
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Are you sure want to delete
      </Typography>
      <div className="d-flex gap-2 justify-content-end">
        <Button onClick={handleDeleteModalClose} sx={{ color: "black" }}>
          Close
        </Button>
        <Button
          onClick={() => deleteTask(data.id)}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </div>
    </Box>
  );
}

export default DeleteTaskModal;
