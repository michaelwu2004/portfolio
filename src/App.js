import './App.css';

import { Home } from './components/Home';


function App() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
