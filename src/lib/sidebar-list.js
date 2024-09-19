import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";

export const sidebarList = [
  {
    title: "all tasks",
    icon: SplitscreenIcon,
    route: "/all-tasks",
  },
  {
    title: "important",
    icon: LabelImportantIcon,
    route: "/important",
  },
  {
    title: "Completed",
    icon: AddTaskIcon,
    route: "/completed",
  },
  {
    title: "Inprogress",
    icon: AutorenewIcon,
    route: "/inprogress",
  },
  {
    title: "Not started",
    icon: AlarmOnIcon,
    route: "/not-started",
  },
];
