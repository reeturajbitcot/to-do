import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import { Modal } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import CardDetailedModal from "./CardDetailedModal";
import DeleteTaskModal from "./DeleteTaskModal";
import EditTaskModal from "./EditTaskModal";
import { useDispatch } from "react-redux";
import { editTodo } from "../../store/slice/toDoSlice";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

function ShowAllTask({ data }) {
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [askDeleteModal, setAskDeleteModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDeleteModalClose = () => setAskDeleteModal(false);
  const handleDeleteModalOpen = () => setAskDeleteModal(true);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);
  const toggelTaskToImportant = (data) => {
    let updatedData = { ...data, isImportant: !data.isImportant };
    dispatch(editTodo(updatedData));
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Card sx={{ minWidth: 275, borderLeft: "solid green 6px" }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            onClick={handleOpen}
            sx={{ cursor: "pointer" }}
          >
            {data.content}
          </Typography>
          <Typography variant="body2">{data.deadLine}</Typography>
          <Button size="small">{data.directory}</Button>
        </CardContent>
        <CardActions sx={{ padding: 0, justifyContent: "flex-end" }}>
          <IconButton aria-label="delete" onClick={handleDeleteModalOpen}>
            <DeleteOutlineIcon />
          </IconButton>
          <IconButton aria-label="edit" onClick={handleOpenEditModal}>
            <CreateIcon />
          </IconButton>
          <IconButton
            aria-label="bookmark"
            onClick={() => toggelTaskToImportant(data)}
          >
            <StarIcon
              sx={data.isImportant ? { color: "green" } : { color: "grey" }}
            />
          </IconButton>
        </CardActions>
      </Card>
      {/* to view  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CardDetailedModal handleClose={handleClose} data={data} />
      </Modal>
      {/* warning modal */}
      <Modal
        open={askDeleteModal}
        onClose={handleDeleteModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DeleteTaskModal
          data={data}
          setOpenSnackbar={setOpenSnackbar}
          handleDeleteModalClose={handleDeleteModalClose}
        />
      </Modal>
      {/* edit modal */}
      <Modal
        open={openEditModal}
        onClose={handleCloseEditModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditTaskModal
          data={data}
          handleCloseEditModal={handleCloseEditModal}
        />
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Task Deleted"
        action={action}
      />
    </>
  );
}

export default ShowAllTask;
