import Navbar from "./navbar";
import Footer from "./Footer";
export default function MainContainer({children}){
    return(
    <>
        <Navbar />
        <div>
            <br></br>
        {children}
        </div>
        <Footer />


    </>

    )
}