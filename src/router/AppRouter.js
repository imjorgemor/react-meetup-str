import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainNavigation from "../layout/mainNavigation/MainNavigation";
import Layout from "../layout/layout/Layout"
import {AllMeetups, Favorites, NewMeetup} from "../pages"


export const AppRouter = () => {

    return (
        <BrowserRouter>
            <MainNavigation />
            <Layout>
                <Routes>
                    <Route path="/home" element={<AllMeetups />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/new-meet-up" element={<NewMeetup />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />   
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
