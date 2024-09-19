import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Modal } from "@mui/material";
import AddTaskModal from "../tasksUi/AddTaskModal";
import Tooltip from "@mui/material/Tooltip";

// const MaterialUISwitch = styled(Switch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   "& .MuiSwitch-switchBase": {
//     margin: 1,
//     padding: 0,
//     transform: "translateX(6px)",
//     "&.Mui-checked": {
//       color: "#fff",
//       transform: "translateX(22px)",
//       "& .MuiSwitch-thumb:before": {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//           "#fff"
//         )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
//       },
//       "& + .MuiSwitch-track": {
//         opacity: 1,
//         backgroundColor: "#aab4be",
//         ...theme.applyStyles("dark", {
//           backgroundColor: "#8796A5",
//         }),
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     backgroundColor: "#001e3c",
//     width: 32,
//     height: 32,
//     "&::before": {
//       content: "''",
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       left: 0,
//       top: 0,
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center",
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//         "#fff"
//       )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
//     },
//     ...theme.applyStyles("dark", {
//       backgroundColor: "#003892",
//     }),
//   },
//   "& .MuiSwitch-track": {
//     opacity: 1,
//     backgroundColor: "#aab4be",
//     borderRadius: 20 / 2,
//     ...theme.applyStyles("dark", {
//       backgroundColor: "#8796A5",
//     }),
//   },
// }));

function Header({ inputSearch, setInputSearch }) {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const handleOpenModal = () => setOpenAddTaskModal(true);
  const handleCloseModal = () => setOpenAddTaskModal(false);
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{
        padding: "0 20px",
      }}
    >
      <div className="d-flex  gap-3">
        <TextField
          id="outlined-basic"
          value={inputSearch}
          size="small"
          onChange={(e) => setInputSearch(e.target.value)}
          sx={{
            width: "600px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "orange", // Sets the border color
              },
              "&:hover fieldset": {
                borderColor: "orange", // Sets the border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "orange", // Sets the border color when focused
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          label="Search for task"
          variant="outlined"
        />
        <Tooltip title="Add new task">
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleOpenModal}
            sx={{
              height: "34px",
              width: "34px",
              backgroundColor: "orange",
              "&:hover": {
                backgroundColor: "#FF8C00",
              },
            }}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>

      <Modal
        open={openAddTaskModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddTaskModal handleCloseModal={handleCloseModal} />
      </Modal>
      <div className="d-flex align-items-center">
        {/* <FormControlLabel
          sx={{ marginRight: 0 }}
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        /> */}
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 36, height: 36 }}
        />
      </div>
    </div>
  );
}

export default Header;
