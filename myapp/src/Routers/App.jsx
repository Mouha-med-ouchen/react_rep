import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Pages/Layout';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import PageNotFound from './PageNotFound'


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout></Layout>}>
                        <Route index element={<Home></Home>}></Route>
                        <Route
                            path='contact' element={<Contact></Contact>}></Route>
                        <Route path='about' element={<About></About>}></Route>
                        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
