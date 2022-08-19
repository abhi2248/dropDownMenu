import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          ClickCart
        </a>
        <Navbar />
      </div>
    </header>
    <div>
      <img src="https://beebom.com/wp-content/uploads/2020/07/fake-flipkart-clones.jpg?quality=75&strip=all"alt=""></img>
    </div>
    </>
  );
};

export default App;