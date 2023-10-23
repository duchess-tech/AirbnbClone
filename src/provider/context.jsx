
import React, { createContext, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [email, setemail] = useState("");
  const [user, setUser] = useState({});
  const [property, setProperty] = useState([]);
  const [Category, setCategory] = useState([]);
  const [showLogin, setShowLogin] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [showEmailOtp, setShowEmailOtp] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [loading, setloading] = useState(false)
  const [popupFilter, setPopupFilter] = useState(false)
  const [shouldNavigate, setshouldNavigate] = useState(false)
  const [propertyId, setpropertyId] = useState(
    localStorage.getItem("propertyid")
      ? JSON.parse(localStorage.getItem("propertyId"))
      : ""
  );
  const [Loggedin, setLoggedIn] = useState(
    localStorage.getItem("loggedIn")
      ? JSON.parse(localStorage.getItem("loggedIn"))
      : null,
  );

  const togglePopup = () => {
    setShowPopup(!showPopup)
    setloading(false)
  }
  const togglePopuptrue = () => {
    setShowLogin(true)
    setShowPopup(false)
  }

  const backTologin = () => {
    setShowLogin(true)
    setShowEmailOtp(false)

  }
  const backToConfirmEmail = () => {
    setShowEmailOtp(true)
    setShowRegister(false)
  }


  const exitRegister = () => {
    setShowRegister(false)
  }

  const initialState = {
    user,
    setUser,
    propertyId,
    setpropertyId,
    property,
    setProperty,
    Category,
    setCategory,
    email,
    setemail,
    Loggedin,
    setLoggedIn,
    showLogin,
    setShowLogin,
    showEmailOtp,
    setShowEmailOtp,
    showRegister,
    setShowRegister,
    togglePopup,
    togglePopuptrue,
    backTologin,
    backToConfirmEmail,
    exitRegister,
    loading,
    setloading,
    showPopup,
    setShowPopup,
    shouldNavigate,
    setshouldNavigate,
    popupFilter,
    setPopupFilter

  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
