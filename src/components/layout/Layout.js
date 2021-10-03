import MainNavigation from "./MainNavigation";
import {Route, Switch} from "react-router-dom";
import Home from "../../pages/Home";
import Shop from "../../pages/Shop";
import About from "../../pages/About";
import Review from "../../pages/Review";
import Video from "../../pages/Video";

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main>{props.children}</main>
        </div>
    );
}

export default Layout;