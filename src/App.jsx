import NavBar from "./component/NavBar";
import "./App.css";
import Section1 from "./component/Section1";
import CitiCard from "./component/CitiCard";
import Herosection from "./component/Herosection";
import CommentSection from "./component/CommentSection";
import Pricing from "./component/Pricing";

function App() {
  return (
    <div>
      <NavBar />
      <Section1 />
      <CitiCard />
      <Herosection />
      <CommentSection />
      <Pricing />
    </div>
  );
}

export default App;
