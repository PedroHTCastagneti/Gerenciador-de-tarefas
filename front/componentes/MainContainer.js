import Navbar from "./navbar";
import Footer from "./Footer";
import Cards from "./card";
export default function MainContainer({children}){
    return(
    <>
        <Navbar />

        <Cards/>
        <div>
        {children}
        </div>
        <Footer />


    </>

    )
}