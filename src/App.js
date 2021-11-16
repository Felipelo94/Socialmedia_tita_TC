import "./App.css";
import Login from "./components/Login";
import { UserContext } from "./UserContext";
import { useMemo, useState } from "react";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState();

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div >
      <UserContext.Provider value={value}>
         {user ? <Home /> : <Login />} 
      </UserContext.Provider>
    </div>
  );
}

export default App;
