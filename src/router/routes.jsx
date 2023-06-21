import { Routes, Route } from 'react-router-dom';

import Company from '../containers/Company/Company';
import Contact from '../containers/Contact/Contact';
import Home from '../containers/Home/Home';
import NewProject from '../containers/New Project/NewProject';
import ProjectEdit from '../containers/ProjectEdit/ProjectEdit';
import Projects from '../containers/Projects/Projects';
// eslint-disable-next-line import/no-unresolved
import DefaultLayout from '../layout/Defaultlayout';

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
        <Route path="/project/:id" element={<ProjectEdit />} />
      </Route>
    </Routes>
  );
}

export default Router;
