let API_HOST = "";

if (process.env.REACT_APP_ENV === "development") {
  API_HOST = "http://localhost:5500";
}

if (process.env.REACT_APP_ENV === "production") {
  API_HOST = "https://shrouded-badlands-02501.herokuapp.com";
}

// API_HOST = "https://shrouded-badlands-02501.herokuapp.com";

export { API_HOST };
