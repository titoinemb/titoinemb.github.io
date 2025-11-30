import { lazy } from "react";

export const Home     = lazy(() => import("./features/Home"));
export const Error404 = lazy(() => import("./features/Error404"));
export const Header   = lazy(() => import("./layout/Header"));
export const Footer   = lazy(() => import("./layout/Footer"));