import { createContext, useState, useContext, useCallback, useReducer } from "react";
import axios from "axios";
import PropTypes from "prop-types"; // Import PropTypes
import { apiReducer, initialState } from "./Reducer";

// Create context
const InternetContext = createContext();

export const InternetProvider = ({ children }) => {
  // Retrieve token from localStorage or default to empty string
  const getToken = () => localStorage.getItem("token");
  const [token, setToken] = useState(getToken());
  const [state, dispatch] = useReducer(apiReducer, initialState);

  let isLoggedIn = !!token;

  // Store token in localStorage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  // Logout user and clear token from state and localStorage
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // Fetch Data (GET Request)
  const fetchData = useCallback(
    async (url) => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Dispatch response data to the global state
        dispatch({ type: "SET_USER_DATA", payload: response?.data?.data });
        return response.data;
      } catch (error) {
        const errorMessage = error?.response?.data?.message || error.message;
        dispatch({ type: "SET_ERROR", payload: errorMessage });
        return errorMessage;
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [token]
  );

  // Post Data (POST Request)
  const postData = useCallback(
    async (endpoint, payload) => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const response = await axios.post(endpoint, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Dispatch response data to the global state
        dispatch({ type: "SET_USER_DATA", payload: response?.data?.data });
        return response.data;
      } catch (error) {
        const errorMessage = error?.response?.data?.message || error.message;
        dispatch({ type: "SET_ERROR", payload: errorMessage });
        return errorMessage;
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [token]
  );

  return (
    <InternetContext.Provider
      value={{
        postData,
        fetchData,
        LogoutUser,
        isLoggedIn,
        storeTokenInLS,
        state,
      }}
    >
      {children}
    </InternetContext.Provider>
  );
};

// Prop validation for InternetProvider component
InternetProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children prop is passed
};

// Custom hook to use the context
export const UseInternetService = () => {
  return useContext(InternetContext);
};
