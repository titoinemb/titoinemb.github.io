import { lazy } from "react";

export const Header   = lazy(() => import("./layout/Header").then(mod => ({ default: mod.Header })));
export const Footer   = lazy(() => import("./layout/Footer").then(mod => ({ default: mod.Footer })));
export const Home       = lazy(() => import("./features/Home").then(mod => ({ default: mod.Home })));