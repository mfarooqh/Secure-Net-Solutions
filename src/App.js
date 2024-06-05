import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/footer';

function App() {
  return (
    <div className="bg-blue-600 min-h-screen flex flex-col">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
