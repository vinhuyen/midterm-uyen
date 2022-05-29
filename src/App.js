import HotNews from './components/HotNews';
import ExtraNews from './components/ExtraNews';
import Header from "./components/Header.component";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//
// import AddNew from "./admin/AddNew";
import Admin from "./admin/admin.component";
import AddNew from "./admin/AddNew";
import UpdateNews from "./admin/UpdateNews";
import News from "./components/Intro.component"


function App() {
    // const [action, setAction] = useState("show")
  return (
  <>
      {/*<Admin/>*/}
      {/*<AddNew/>*/}
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Header/>}>
                  <Route path="/" element={<News/>}/>
                  <Route path="Admin" element={<Admin/>} />
                  <Route path="Admin/Create" element={<AddNew/>} />
                  <Route path="Admin/Update/:id" element={<UpdateNews/>} />
              </Route>
              {/*<Header/>*/}
          </Routes>
      </BrowserRouter>

  </>
  );
}

export default App;
