import "./assets/reset.css"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Category from "./components/Category/Category.jsx"
import Footer from "./components/Footer/Footer.jsx"

// https://www.figma.com/design/FQMCtNuVqsHCfAIsCKE35l/CourseHub---University--Online-Courses--School---Education-Figma-Template--Community-?node-id=1-799&t=7ly1lkE9zN1NWWC3-0

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Category />

      <Footer />
    </>
  );
}

export default App
