import Footer2 from "../component/footer2";
import Navbar2 from "../component/navbar2";

function Defaultnav1({children}){
    return(
        <>
      <Navbar2/>
        {children}
        <Footer2/>
        </>

    )
}
export default Defaultnav1