import { MainLayout } from "../../components/layouts";
import { Main } from "../../components/pages";

export const ROOT = "/";

export const PUBLIC_ROUTES = {
  [ROOT]: { element: Main, layout: MainLayout },
};
