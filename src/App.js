import {Header} from "./components/Header";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Home} from "./views/Home";
import {About} from "./views/About";
import {MovieDetail} from "./views/MovieDetail";

function App() {

    return (
    <div>
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/movie/:id" element={<MovieDetail/>}/>
            </Routes>
        </BrowserRouter>

    </div>
    );
}

export default App;
