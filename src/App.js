import react from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import RecoomendedVideos from "./RecoomendedVideos";

function App() {
  return (
    <div className="App">
   {/* <h1>hellow to react there</h1>*/}

    <Header/>
        {/* 1  Header*/}
        {/*sidebarer*/}
        {/*recomended*/}

        

        <div className="app__pages ">
          <Sidebar />

          <RecoomendedVideos/>
          
      </div>   
    </div>
  );
}

export default App;
