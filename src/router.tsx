import { useRoutes } from "react-router-dom";

import Layout from "./layout/Layout";
import HomeLayout from "./layout/layouts/HomeLayout";
import A from "./views/A/A";

export default function RouterUrl() {
    return useRoutes([
        { path: "*", element: <Layout children={<HomeLayout />} /> },
        {
            path: "a",
            element: <Layout children={<HomeLayout />} />,
        },
    ]);
}
