import NotificationHeader from "./components/NotificationHeader";
import TopBar from "./components/TopBar";
import CategoriesBar from "./components/CategoriesBar";
import Hero from "./components/Hero";

import GlobalStyle from "./components/GlobalStyle";

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <NotificationHeader
        contentBold='Learn from A$14.99'
        contentLight='Browse thousands of courses in a wide variety of in-demand topics.'
        bgColor='#8ed1dc'
      />
      <TopBar />
      <CategoriesBar />
      <Hero />
    </div>
  );
};

export default App;
