import React, { useState } from "react";
import MainNavigation from "./MainNavigation";
import Menu from "./Menu";
import Modal from "../modals/Modal";
import LoginForm from "../modals/LoginForm";
import LanguageForm from "../modals/LanguageForm";

function Layout(props) {
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const [langModalIsOpen, setLangModalIsOpen] = useState(false);

    const loginModalHandler = () => {
        setLoginModalIsOpen(true);
    };

    const langModalHandler = () => {
        setLangModalIsOpen(true);
    };

    const closeModalHandler = () => {
        setLoginModalIsOpen(false);
        setLangModalIsOpen(false);
    };

    return (
        <div>
            <MainNavigation />
            <Menu
                loginModalHandler={loginModalHandler}
                langModalHandler={langModalHandler}
            />
            {
                loginModalIsOpen &&
                <Modal onClose={closeModalHandler} text="login">
                    <LoginForm />
                </Modal>
            }
            {
                langModalIsOpen &&
                <Modal onClose={closeModalHandler} text="language">
                    <LanguageForm />
                </Modal>
            }
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;