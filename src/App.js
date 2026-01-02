import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/BodyHeader"
import EventListing from "./pages/EventListing";

const App = () => {
  return (
    <div className="bg-body-secondary">
      <header>
        <Header />
      </header>
      <main>
        <EventListing />
      </main>
    </div>
  )
}

export default App;