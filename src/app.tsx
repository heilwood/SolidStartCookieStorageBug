import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { lazy, Suspense } from "solid-js";
import Nav from "~/components/Nav";


const Home = lazy(() => import("./pages/index"));
const About = lazy(() => import("./pages/about"));
const Faq = lazy(() => import("./pages/faq"));

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
       <Route path={`/`} component={Home}></Route>
       <Route path={`/about`} component={About}></Route>
       <Route path={`/faq`} component={Faq}></Route>
      {/* <FileRoutes /> */}
    </Router>
  );
}
