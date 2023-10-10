import { Route, Routes } from "react-router-dom";
import { SignIn } from "./Pages/SignIn";
import { Home } from "./Pages/Home";
import { CompanyProfile } from "./Pages/CompanyProfile";
import { EditProduct } from "./Pages/EditProduct";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/profile" element={<CompanyProfile />}/>
            <Route path="/edit/:id" element={<EditProduct />}/>
        </Routes>
    )
}