import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useUsersQuery } from "./api/users";
import Layout from "./pages/layout";
import Users from "./pages/users";
import UsersAdd from "./pages/users-add";

function App() {
  const { data, error, isLoading } = useUsersQuery();
  console.log(data);

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
