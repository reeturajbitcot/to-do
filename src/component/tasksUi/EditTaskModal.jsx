import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";
import { formatDatePickerDate } from "../../lib/helperFunction";
import { editTodo } from "../../store/slice/toDoSlice";
import dayjs from "dayjs";

const style = {
  position: "absolute",
  gap: "20px",
  display: "flex",
  flexDirection: "column",
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
function EditTaskModal({ data, handleCloseEditModal }) {
  const dispatch = useDispatch();
  const [directory, setDirectory] = useState(data.directory);
  const [title, setTitle] = useState(data.content);
  const [description, setDescription] = useState(data.description);
  const [deadline, setDeadline] = useState(data.deadLine);
  const [selectedValue, setSelectedValue] = useState(data.isImportant);
  const [status, setStatus] = useState(data.toDoStatus);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const handleRadioChange = (value) => {
    setSelectedValue(selectedValue === value ? false : value);
  };

  const handleChange = (event) => {
    setDirectory(event.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!deadline) {
      newErrors.deadline = "Deadline is required";
    }
    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      let updatedData = {
        ...data,
        content: title,
        description: description,
        deadLine: deadline,
        directory: directory,
        isImportant: selectedValue,
        toDoStatus: status,
      };
      dispatch(editTodo(updatedData));
      handleCloseEditModal();
    }
  };
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Update Task
      </Typography>
      {/* Title */}
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={!!errors.title}
        helperText={errors.title}
      />
      {/* Description */}
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        error={!!errors.description}
        helperText={errors.description}
      />
      {/* Deadline */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Deadline"
          value={dayjs(deadline)}
          onChange={(newDate) => setDeadline(formatDatePickerDate(newDate))}
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!errors.deadline}
              helperText={errors.deadline}
            />
          )}
        />
      </LocalizationProvider>
      {/* Directory */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Directory</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={directory}
          label="Directory"
          onChange={handleChange}
        >
          <MenuItem value="work">Work</MenuItem>
          <MenuItem value="house-hold">House hold</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </Select>
      </FormControl>
      {/* Status */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Change Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Change Status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="inprogress">In progress</MenuItem>
        </Select>
      </FormControl>
      {/* Is Important */}
      <FormControl>
        <FormControlLabel
          control={
            <Radio
              checked={selectedValue === true}
              onClick={() => handleRadioChange(true)}
            />
          }
          label="Important"
        />
      </FormControl>
      <div className="d-flex gap-2 justify-content-end">
        <Button onClick={handleCloseEditModal} sx={{ color: "black" }}>
          Close
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ backgroundColor: "orange" }}
        >
          Update
        </Button>
      </div>
    </Box>
  );
}

export default EditTaskModal;
