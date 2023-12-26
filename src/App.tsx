import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";



const App = () => {

    return (
        <div>
            <Navbar />
            <div>
                <Home />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Projects />
            </div>
            
        </div>
    );
};

export default App;
