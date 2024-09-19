import dayjs from "dayjs";

export function getRouteText(text) {
  switch (text) {
    case "/all-tasks":
      return "All Tasks";
    case "/important":
      return "Important Tasks";
    case "/completed":
      return "Completed Tasks";
    case "/inprogress":
      return "Task In progress";
    case "/not-started":
      return "Tasks Not Started";
    default:
      return "Tasks";
  }
}

export const formatDatePickerDate = (date) => {
  return dayjs(date).format("MM-DD-YYYY");
};

export const Capitalized = (string) => {
  let stringArray = string.split("");
  let firstLetterCapital = stringArray.shift().toUpperCase();
  stringArray.unshift(firstLetterCapital);

  return stringArray.join("");
};
