import MainStyleContext from "../Context/MainStyleContext";
import Navigation from "../Components/Navigation";

const MainStyleProvider = ({ children }) => {
  return (
    <MainStyleContext.Provider value={{}}>
      <header className="sticky z-50 mx-auto">
        <Navigation />
      </header>
      <main className="z-0 pt-20 mx-auto">{children}</main>
    </MainStyleContext.Provider>
  );
};

export default MainStyleProvider;
