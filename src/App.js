import HotNews from './components/HotNews';
import ExtraNews from './components/ExtraNews';
import Header from "./components/Header.component";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Admin from "./admin/admin.component";
import AddNew from "./admin/AddNew";
import UpdateNews from "./admin/EditNew";
import News from "./components/Intro.component"


function App() {
  return (
  <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Header/>}>
                  <Route path="/" element={<News/>}/>
                  <Route path="Admin" element={<Admin/>} />
                  <Route path="Admin/Create" element={<AddNew/>} />
                  <Route path="Admin/Update/:id" element={<UpdateNews/>} />
              </Route>
          </Routes>
      </BrowserRouter>

  </>
  );
}

export default App;
