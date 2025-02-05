import './App.css';
import React, {Suspense} from "react";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {lazy} from 'react';

const DialogsContainer = lazy(async () => {
    const module = await import("./components/Dialogs/DialogsContainer");
    return {default: module.default};
});
const ProfileContainerSuper = lazy(async () => {
    const module = await import("./components/Profile/ProfileContainer");
    return {default: module.default};
});
const Login = lazy(async () => {
    const module = await import("./components/Login/Login");
    return {default: module.default};
})


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/profile/:userId?" element={<ProfileContainerSuper />}/>
                            <Route path="/dialogs" element={<DialogsContainer />}/>
                            <Route path="/users" element={<UsersContainer />}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                        </Suspense>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

let AppContainer = connect(mapStateToProps, {initializeApp})(App);


const MainApp = () => {
    return <React.StrictMode>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </React.StrictMode>
}

export default MainApp;