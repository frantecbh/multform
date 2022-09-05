import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormStep1 } from "./pages/FromStep1";
import { FormStep2 } from "./pages/FromStep2";
import { FormStep3 } from "./pages/FromStep3";





export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormStep1 />} />
                <Route path="/step2" element={<FormStep2 />} />
                <Route path="/step3" element={<FormStep3 />} />

            </Routes>
        </BrowserRouter>
    )
}

