import { Provider } from "react-redux/es/exports";
import Pages from "./components/pages/Pages";
import Nav from "./components/Nav";
import EditForm from './components/EditForm'
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/edit/:id" element={<EditForm />} />


          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
