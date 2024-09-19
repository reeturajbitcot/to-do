import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
import { addToDo } from "../../store/slice/toDoSlice";

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

function AddTaskModal({ handleCloseModal }) {
  const [directory, setDirectory] = useState("");
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [deadline, setDeadline] = useState(null);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  // is important
  const [selectedValue, setSelectedValue] = useState(false);

  const handleRadioChange = (value) => {
    setSelectedValue(selectedValue === value ? false : value);
  };

  const handleChange = (event) => {
    setDirectory(event.target.value);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!titleRef.current.value) {
      newErrors.title = "Title is required";
    }
    if (!descriptionRef.current.value) {
      newErrors.description = "Description is required";
    }
    if (!deadline) {
      newErrors.deadline = "Deadline is required";
    }
    if (!directory) {
      newErrors.directory = "Please select a directory";
    }
    setErrors(newErrors);
    // If no errors exist, the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const formData = {
        newContent: titleRef.current.value,
        description: descriptionRef.current.value,
        deadLine: formatDatePickerDate(deadline),
        directory: directory,
        isImportant: selectedValue,
      };
      dispatch(addToDo(formData));
      handleCloseModal();
    }
  };

  return (
    <div>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h1">
          Add New Task
        </Typography>
        {/* title */}
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          inputRef={titleRef}
          error={!!errors.title}
          helperText={errors.title}
        />
        {/* description */}
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          inputRef={descriptionRef}
          error={!!errors.description}
          helperText={errors.description}
        />
        {/* deadline */}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Deadline"
            value={deadline}
            onChange={(newDate) => setDeadline(newDate)}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!errors.deadline}
                helperText={errors.deadline}
              />
            )}
          />
        </LocalizationProvider>
        {/* directory */}
        <FormControl fullWidth error={!!errors.directory}>
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
          {errors.directory && (
            <Typography variant="caption" color="error">
              {errors.directory}
            </Typography>
          )}
        </FormControl>
        {/* is important */}
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
        <div className="d-flex justify-content-end gap-3">
          <Button onClick={handleCloseModal} sx={{ color: "black" }}>
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ backgroundColor: "orange" }}
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default AddTaskModal;
