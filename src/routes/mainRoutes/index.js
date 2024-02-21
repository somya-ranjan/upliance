import { lazy } from "react";

export const guestRoutes = [
  {
    path: "/sign-in",
    name: "SignIn",
    exact: true,
    component: lazy(() => import("../../view/auth/SignIn")),
  },

  {
    redirectRoute: true,
    path: "/sign-in",
    name: "SignIn",
  },
];

export const userRoutes = [
  {
    path: "/",
    name: "Dashboard",
    exact: true,
    component: lazy(() => import("../../view/dashboard/Dashboard")),
  },
  {
    redirectRoute: true,
    name: "Dashboard",
    path: "/",
  },
];
