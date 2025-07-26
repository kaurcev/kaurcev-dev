import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Application.js';
import E404View from './views/notFound/view';
import HomeView from './views/home/view.js';
import AboutView from './views/about/view.js';
import ResumeView from './views/resume/view.js';
import ProjectsView from './views/projects/view.js';
import NewsView from './views/news/view.js';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/about' element={<AboutView />} />
          <Route exact path='/resume' element={<ResumeView />} />
          <Route exact path='/news' element={<NewsView />} />
          <Route exact path='/projects' element={<ProjectsView />} />
          <Route path='*' status="404" element={<E404View />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
