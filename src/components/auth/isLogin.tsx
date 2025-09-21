import { useNavigate } from "react-router";

 const isLoggedIn = () => {
  const navigate = useNavigate();  

  const isLogin = localStorage.getItem("isLoggedIn");
  
  if (!isLogin) {
    navigate("/login");  
  }
};
export default isLoggedIn