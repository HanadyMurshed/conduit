export const isAuthenticated = () => {
  const stringfiedData = sessionStorage.getItem("data");
  if (stringfiedData) return Boolean(JSON.parse(stringfiedData).token);
};
