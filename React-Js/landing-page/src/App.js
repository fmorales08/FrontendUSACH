import "./App.css";
import Slider from "./components/Slider/Slider";
import Menu from "./components/Menu/Menu";
import Pillars from "./components/Pillars/Pillars";
import Footer from "./components/Footer/Footer";
function App() {
	return (
		<div className="App">
			<Menu />
			<Slider />
			<Pillars />
			<Footer />
		</div>
	);
}

export default App;
