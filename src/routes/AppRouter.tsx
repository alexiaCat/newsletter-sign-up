import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Form}  from '../Form';
import  {Success}  from '../components/Success';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/success" element={<Success/>} />
                <Route path="/" index element={<Form/>} />
            </Routes>
        </BrowserRouter>
    )
}
