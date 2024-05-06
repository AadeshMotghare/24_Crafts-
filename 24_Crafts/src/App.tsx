import { Route, Routes } from "react-router-dom";
// import "./App.css";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import LoginPage from "./_auth/forms/LoginPage";
import RegisterPage from "./_auth/forms/RegisterPage";
import { Home, NotFound } from "./_root/pages";

function App() {
  return (
    <>
      <main className=" flex flex-1">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/log-in" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/page-not-found" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
