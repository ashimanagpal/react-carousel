import './App.css';
import Header from './Header';
import ImageSlider from './ImageSlider';

function App() {
  const country = "India";

  return (
    <div className="App main-container">
      <Header country={country}/>
      <ImageSlider />
    </div>
  );
}

export default App;
