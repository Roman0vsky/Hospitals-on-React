import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home, { dashboardLoader } from "./pages/Home";
import Login, { loginLoader } from "./pages/Login";
import Register, { registerLoader } from "./pages/Register";
import RootLayout from "./layouts/RootLayout";
import { companiesLoader } from "./pages/Doctors";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./components/ui/NotFound";
import { Navigate } from "react-router-dom";

import { APP_ROUTES } from "./utils/constants";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import { doctorLoader } from "./pages/Doctors/Doctor";
import PersonalCabinet from "./pages/PersonalCabinet";
import Doctor from "./pages/Doctors/Doctor";
import Doctors from "./pages/Doctors";
import AddDoctor from "./pages/AddDoctor";
import Reviews from "./pages/Reviews";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to={APP_ROUTES.CATALOG} />} />

        <Route
          path={APP_ROUTES.LOGIN}
          element={<Login />}
          loader={loginLoader}
        />
        <Route
          path={APP_ROUTES.REGISTER}
          element={<Register />}
          loader={registerLoader}
        />

        <Route element={<ProtectedRoute role="user" />}>
          <Route index element={<Navigate to={APP_ROUTES.CATALOG} />} />

          <Route path={APP_ROUTES.CATALOG} element={<DashboardLayout />}>
            <Route index element={<Home />} loader={dashboardLoader} />
            <Route
              path={`${APP_ROUTES.CATALOG}/:name`}
              element={<Doctors />}
              loader={companiesLoader}
            />
            <Route
              path={`${APP_ROUTES.CATALOG}/:name/:id`}
              element={<Doctor />}
              loader={doctorLoader}
            />
            <Route
              path={`${APP_ROUTES.CATALOG}/:name/reviews`}
              element={<Reviews />}
              loader={doctorLoader}
            />
            <Route
              path="doctors/add"
              element={<AddDoctor />}
              loader={dashboardLoader}
            />
            <Route
              path="cabinet"
              element={<PersonalCabinet />}
              loader={dashboardLoader}
            />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
