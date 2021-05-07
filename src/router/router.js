import React from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import Home from "../pages/home";
//import Model from "../pages/model"
import ScrollToTop from "../components/scrollToTop";
import Work from "../pages/work";
// import About from "../pages/about";

export default function Router() {
    const imageDetails = {
        width: 393, //524,
        height: 487.5 //650,
    };

    return (
        <BrowserRouter>
            <div className="invisible"></div>
            <Header />
            <Route
                render={({ location }) => (
                    <AnimateSharedLayout type="crossfade">
                        <AnimatePresence initial={false} exitBeforeEnter>
                            <ScrollToTop />
                            <Switch location={location} key={location.pathname}>
                                <Route
                                    exact
                                    path='/'
                                    render={() => <Home imageDetails={imageDetails} />}
                                />
                                <Route
                                    exact
                                    path='/work/:id'
                                    render={() => <Work imageDetails={imageDetails} />}
                                />
                            </Switch>
                        </AnimatePresence>
                    </AnimateSharedLayout>
                )}
            />
        </BrowserRouter>
    )
}