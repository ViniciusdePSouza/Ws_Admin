import { Route, Routes } from "react-router-dom";
import { SignIn } from "./Pages/SignIn";
import { Home } from "./Pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
    )
}