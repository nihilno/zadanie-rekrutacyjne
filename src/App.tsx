import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import NotFound from "./pages/not-found";
import UserDetailed from "./pages/user-detailed";
import Users from "./pages/users";
import UsersAdd from "./pages/users-add";
import Welcome from "./pages/welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="users">
            <Route index element={<Users />} />
            <Route path="add" element={<UsersAdd />} />
            <Route path=":id" element={<UserDetailed />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
