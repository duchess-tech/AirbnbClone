export const handleSaveToken = (token) => {
    return localStorage.setItem("token", JSON.stringify(token));
}
export function handle_SetpropId(res) {
  localStorage.setItem("propertyId", JSON.stringify(res));
}
export function setLogin(userIn) {
  localStorage.setItem("loggedIn", JSON.stringify(userIn));
}
  
//   export const handleSaveUser = (user) => {
//     return localStorage.setItem("user", JSON.stringify(user));
//   };
  

  
//   export function Existing(setexisting) {
//     localStorage.setItem("existing", JSON.stringify(true));
//     setexisting(true);
//   }
