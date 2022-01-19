import { NavBar, Footer, Transactions, Services, Welcome } from "./components";

const App = () => {
  return (
    <div className={"min-h-screen"}>
      <div className={"gradient-bg-welcome text-white"}>
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
