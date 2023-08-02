import React, {useEffect, useState} from "react";
import './main.global.scss'
import {hot} from "react-hot-loader/root";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {Layout} from "./shared/Layout";
import {Text} from "./shared/Text";
import {Footer} from "./shared/Footer";
import {initData} from "./api/InitData";

function AppComponent() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    console.log(initData())

    return (
        <>
            {mounted && (
                <BrowserRouter>
                    <Layout>
                        <Footer />
                        <Routes>
                            <Route path="/shop" element={<Text>Каталог</Text>} />
                            <Route path="/shop/basket/" element={<Text>Карзина</Text>}/>
                        </Routes>
                    </Layout>
                </BrowserRouter>
            )}
        </>

    )
}

export const App = hot(() => (
    <AppComponent/>
))