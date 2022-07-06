import Menu from 'components/Menu';

import Home from 'pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}