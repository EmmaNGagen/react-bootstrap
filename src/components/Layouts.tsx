import { Link, Outlet } from "react-router-dom";
import { Footer } from "./pages/Footer";
import { NavigationMenu } from "./pages/NavigationMenu";
import "./styles/main.scss"

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