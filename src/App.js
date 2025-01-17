import "./App.css";

// Router and Pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Outcomes from "./pages/Outcomes";
import Teams from "./pages/Teams";
import Topics from "./pages/Topics";

import Cohort1 from "./pages/Cohort1";
import Cohort1Schedule from "./pages/Cohort1Schedule";
import Cohort2 from "./pages/Cohort2";
import Cohort2Schedule from "./pages/Cohort2Schedule";
import Cohort3 from "./pages/Cohort3";
import Cohort3Schedule from "./pages/Cohort3Schedule";
import Cohort4 from "./pages/Cohort4";
import Cohort4Schedule from "./pages/Cohort4Schedule";
import Cohort5 from "./pages/Cohort5";
import Cohort5Schedule from "./pages/Cohort5Schedule";
import Cohort6 from "./pages/Cohort6";
import Cohort6Schedule from "./pages/Cohort6Schedule";

function App() {
    return (
        <Router>
            <Routes>
                {/* Define the routes for each page */}
                <Route path="/" element={<Home />} />
                <Route path="/outcomes" element={<Outcomes />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/topics" element={<Topics />} />


                <Route path="/cohort1" element={<Cohort1 />} />
                <Route 
                    path="/cohort1-schedule" 
                    element={<Cohort1Schedule />} 
                />
                
                <Route path="/cohort2" element={<Cohort2 />} />
                <Route
                    path="/cohort2-schedule"
                    element={<Cohort2Schedule />}
                />

                <Route path="/cohort3" element={<Cohort3 />} />
                <Route
                    path="/cohort3-schedule"
                    element={<Cohort3Schedule />}
                />

                <Route path="/cohort4" element={<Cohort4 />} />
                <Route 
                    path="/cohort4-schedule" 
                    element={<Cohort4Schedule />} 
                />

                <Route path="/cohort5" element={<Cohort5 />} />
                <Route 
                    path="/cohort5-schedule" 
                    element={<Cohort5Schedule />} 
                />

                <Route path="/cohort6" element={<Cohort6 />} />
                <Route 
                    path="/cohort6-schedule" 
                    element={<Cohort6Schedule />} 
                />

                {/* UPDATE THIS */}
                {/* UPDATE THIS */}
                {/* <Route path="/cohort6" element={<Cohort6 />} />
                <Route 
                    path="/cohort6-schedule" 
                    element={<Cohort6Schedule />} 
                /> */}
                {/* UPDATE THIS */}
                {/* UPDATE THIS */}


            </Routes>
        </Router>
    );
}

export default App;
