import MainStyleContext from "../Context/MainStyleContext";
import Navigation from "../Components/Navigation";

const MainStyleProvider = ({ children }) => {
  return (
    <MainStyleContext.Provider value={{}}>
      <header className="fixed z-50 w-full bg-[#232323]">
        <Navigation />
      </header>
      <main className="z-0 pt-20">{children}</main>
    </MainStyleContext.Provider>
  );
};

export default MainStyleProvider;
