import { Link, Outlet } from "react-router-dom";
import { Footer } from "./pages/Footer";
import { NavigationMenu } from "./pages/NavigationMenu";

export const Layouts = () => {
  
    return(
        <div className="layoutsWrapper">
    <header>
    <NavigationMenu/>
    </header>
    <main>
      <Outlet/>
    </main>
    <Footer />
  </div>
    )
}
export default Layouts;