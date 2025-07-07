import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../../Application";

export default function E404View(){    
    const {setTitle} = useAppContext();
    useEffect(()=>{
        setTitle("Page not found")
    }, [setTitle])
    return (
        <>
        <Header />
            <main className="centered">
                <h1>404</h1>
                <p>This page has been removed or never existed.</p>
                <Link to="/">Home</Link>
            </main>
        <Footer />
        </>
    )
}
