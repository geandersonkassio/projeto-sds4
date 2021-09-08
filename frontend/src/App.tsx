import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="text-primary container">
        <h1>Olá mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
