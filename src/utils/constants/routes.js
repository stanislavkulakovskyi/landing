import { MainLayout } from "../../components/layouts";
import { Main, Artists } from "../../components/pages";

export const ROOT = "/";
export const ARTISTS = "/artists";
export const SERVICES = "#services";

export const PUBLIC_ROUTES = [
  { layout: MainLayout, page: Main, path: ROOT, title: "about" },
  { layout: MainLayout, page: Artists, path: ARTISTS, title: "artists" },
  { layout: MainLayout, page: Main, path: SERVICES, title: "services" },
];

export const PUBLIC_ROUTEqweS = {
  [ROOT]: { page: Main, layout: MainLayout, title: "about" },
  [ARTISTS]: { page: Main, layout: MainLayout, title: "artists" },
  [SERVICES]: { page: Main, layout: MainLayout, title: "services" },
};
