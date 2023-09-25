
import React, { createContext, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  //   const [mail, setmail] = useState("");
  //   const [modalShow, setModalShow] = useState(false);
  //   const [filterShow, setFilterShow] = useState(false);
  //   const [searchShow, setSearchShow] = useState(false);
  //   const [filterWeb, setFilterWeb] = useState(false);
  //   const [fullscreen, setFullscreen] = useState(false);
  const [user, setUser] = useState({});
  //   const [authloading, setauthloading] = useState(true);
  //   const [existingUser, setexistingUser] = useState({});
  //   const [wishlist, setwishlist] = useState([]);
  //   const [property, setProperty] = useState([]);

  //   const [activeButton, setActiveButton] = useState(
  //     localStorage.getItem("active")
  //       ? JSON.parse(localStorage.getItem("active"))
  //       : "first",
  //   );

  const [propertyId, setpropertyId] = useState(
    localStorage.getItem("propertyid")
      ? JSON.parse(localStorage.getItem("propertyId"))
      : ""
  );

  //   const [Loggedin, setLoggedIn] = useState(
  //     localStorage.getItem("loggedin")
  //       ? JSON.parse(localStorage.getItem("loggedin"))
  //       : null,
  //   );

  //   const [existing, setexisting] = useState(
  //     localStorage.getItem("existing")
  //       ? JSON.parse(localStorage.getItem("existing"))
  //       : false,
  //   );
  //   let isMounted = true;

  //   useEffect(() => {
  //     const fetchWishlist = async () => {
  //       try {
  //         const response = await httpAuth.get("/wishlist");
  //         setwishlist(response.data.wish);
  //       } catch (error) {
  //         if (error.response.data.msg == "unauthorised") {
  //           setwishlist([]);
  //         }
  //       }
  //     };

  //     if (isMounted) {
  //       fetchWishlist();
  //     }
  //     return () => {
  //       isMounted = false;
  //     };
  //   }, []);

  const initialState = {
    user,
    setUser,
    propertyId,
    setpropertyId,
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
