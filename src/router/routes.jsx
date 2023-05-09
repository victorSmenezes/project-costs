import { Routes, Route } from "react-router-dom"
import Home from "../containers/Home/Home"
import Company from "../containers/Company/Company"
import NewProject from "../containers/New Project/NewProject"
import Contact from "../containers/Contact/Contact"
import DefaultLayout from "../layout/Defaultlayout"
import Projects from "../containers/Projects/Projects"


function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/newproject" element={<NewProject />} />
            </Route>
        </Routes>
    )
}

export default Router