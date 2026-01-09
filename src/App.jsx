import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/javascript/Home'
import Chat from './pages/javascript/Chat'
import CreateDebate from './pages/javascript/CreateDebate'
import Debate from './pages/javascript/Debate'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/create-debate" element={<CreateDebate />} />
        <Route path="/debate" element={<Debate />} />
      </Routes>
    </Router>
  )
}

export default App

