import { MainLayout } from "../../components/layouts";
import { Main } from "../../components/pages";

export const ROOT = "/";

export const PUBLIC_ROUTES = {
  [ROOT]: { page: Main, layout: MainLayout },
};
