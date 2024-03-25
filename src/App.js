import { Routes, Route, Link } from "react-router-dom";
import Detail from './Component/Detail';
import ListNew from './Component/ListNew';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<ListNew />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </>

  );
}

export default App;
