import NotificationHeader from "./components/NotificationHeader";
import TopBar from "./components/TopBar";
import CategoriesBar from "./components/CategoriesBar";
import Hero from "./components/Hero";

// Footer Components
import TeachBar from "./components/TeachBar";
import BrandsBar from "./components/BrandsBar";
import Footer from "./components/Footer";

import GlobalStyle from "./components/GlobalStyle";
import CurrentLearning from "./components/CurrentLearning";
import BusinessBar from "./components/BusinessBar";

const App = () => {
  return (
    <div className='App'>
      <header>
        <GlobalStyle />
        <NotificationHeader
          contentBold='Learn from A$14.99'
          contentLight='Browse thousands of courses in a wide variety of in-demand topics.'
          bgColor='#8ed1dc'
        />
        <TopBar />
        <CategoriesBar />
        <Hero />
      </header>
      <main>
        <CurrentLearning />
        <BusinessBar />
      </main>
      <footer>
        <TeachBar />
        <BrandsBar />
        <Footer />
      </footer>
    </div>
  );
};

export default App;
