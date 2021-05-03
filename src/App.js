import NotificationHeader from "./components/NotificationHeader";
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
    </div>
  );
};

export default App;
