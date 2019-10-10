export const isAuthenticated = () => {
  const stringfiedData = sessionStorage.getItem("data");
  if (stringfiedData) return Boolean(JSON.parse(stringfiedData).token);
};
export const formatDate = (stringDate: string) => {
  const date = new Date(stringDate);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  return `${weekDays[date.getDay()]} ${
    monthNames[date.getMonth()]
  } ${date.getDay()} ${date.getFullYear()}`;
};
