import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  return (
    <div className="bg-blue-600 min-h-screen flex flex-col">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
