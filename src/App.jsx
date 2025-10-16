import Header from './components/Header';
import MainContainer from './components/MainContainer';
import './App.css'

/**
 * Main App component - Root component that assembles the entire application
 * Organized with proper structure following React best practices
 */
function App() {
  return (
    <>
      {/* Main title header outside the grid container */}
      <Header />
      
      {/* Main grid container with all content sections */}
      <MainContainer />
    </>
  )
}

export default App
