import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";
import "./app.scss";
import Data from "./Data";

function App() {
  let info = Data.map((item) => {
    return (
      <Card
        key={item.id}
        tite={item.title}
        location={item.location}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
        // {...item}
      />
    );
  });

  return (
    <div className='App'>
      <NavBar />
      {info}
    </div>
  );
}

export default App;
