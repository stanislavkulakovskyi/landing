import React from "react";

import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { PUBLIC_ROUTES, ROOT } from "./utils/constants/routes";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        {Object.keys(PUBLIC_ROUTES).map((routeKey) => {
          const { page: Page, layout: Layout } = PUBLIC_ROUTES[routeKey];

          return (
            <Route
              key={routeKey}
              path={routeKey}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        <Route path="*" element={<Navigate to={ROOT} />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
