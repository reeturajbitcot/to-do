import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const style = {
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

function CardDetailedModal({ handleClose, data }) {
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {data.content}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {data.description}
      </Typography>
      <div className="d-flex justify-content-between mt-3">
        <label>Status</label>
        <Typography id="modal-modal-description">{data.toDoStatus}</Typography>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <label>Date Added</label>
        <Typography id="modal-modal-description">{data.dateAdded}</Typography>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <label>Deadline</label>
        <Typography id="modal-modal-description">{data.deadLine}</Typography>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <label>Directory</label>
        <Typography id="modal-modal-description">{data.directory}</Typography>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <label>Is Important</label>
        <Typography id="modal-modal-description">
          {data.isImportant.toString()}
        </Typography>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Box>
  );
}

export default CardDetailedModal;
