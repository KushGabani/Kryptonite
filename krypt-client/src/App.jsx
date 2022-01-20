import { Footer, NavBar, Services, Welcome } from "./components";

const App = () => {
  return (
    <div className={"min-h-screen"}>
      <div
        className={
          "gradient-bg-welcome flex flex-col justify-between items-center min-h-screen"
        }
      >
        <NavBar />
        <Welcome />
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default App;
