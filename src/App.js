import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BlogList from './BlogList';
import Post from './Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
