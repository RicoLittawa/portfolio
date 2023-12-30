import MainStyleContext from "../Context/MainStyleContext";
import Navigation from "../Components/Navigation";

const MainStyleProvider = ({ children }) => {
  return (
    <MainStyleContext.Provider value={{}}>
      <header className="py-3">
        <Navigation />
      </header>
      <main>{children}</main>
    </MainStyleContext.Provider>
  );
};

export default MainStyleProvider;
