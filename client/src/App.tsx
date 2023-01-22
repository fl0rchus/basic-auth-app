import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecureRoutes from "./components/SecureRoutes";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useAuthStore } from "./store/auth";

const App = () => {
  const { isAuth } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <SecureRoutes isAllowed={isAuth}>
              <Profile />
            </SecureRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
