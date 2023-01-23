import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Before from "./routes/Home/Before";
import After from "./routes/Home/Before/After";
import Welcome from "./routes/Home/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="before" element={<Before />} >
            <Route path="after" element={<After />}/>
          </Route>

          
        </Route>
        
        {/*Not Found */}<Route path="*" element={<Navigate to={"NAO ENCONTRADO"} />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
