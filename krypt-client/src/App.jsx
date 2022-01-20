import { Footer, NavBar, Services, Transactions, Welcome } from "./components";

const App = () => {
  return (
    <div>
      <div
        className={
          "gradient-bg-welcome flex flex-col justify-between items-center"
        }
      >
        <NavBar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
