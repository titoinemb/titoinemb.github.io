import { lazy } from "react";

export const Header       = lazy(() => import("./layout/Header").then(mod => ({ default: mod.Header })));
export const Footer       = lazy(() => import("./layout/Footer").then(mod => ({ default: mod.Footer })));
export const Home         = lazy(() => import("./features/Home").then(mod => ({ default: mod.Home })));
export const Projects     = lazy(() => import("./features/Projects").then(mod => ({ default: mod.Projects })));
export const ProjectsList = lazy(() => import("./layout/projects/List").then(mod => ({ default: mod.List })));
export const ProjectItem = lazy(() => import("./layout/projects/Item").then(mod => ({ default: mod.Item })));