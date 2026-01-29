import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import NotFound from "./pages/not-found";
import Users from "./pages/users";
import UsersAdd from "./pages/users-add";

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
          <Route path="users">
            <Route index element={<Users />} />
            <Route path="add" element={<UsersAdd />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
