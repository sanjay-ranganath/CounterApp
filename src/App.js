import React, {useState} from "react";

function App() {

  const [count, setcount] = useState(0);

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter Application</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-info mx-3" onClick={()=>{setcount(count + 1)}}>increase</button>
            <button className="btn btn-info mx-3" onClick={()=>{setcount(0)}}>reset</button>
          </div>
        </div>
        <div className="my-3">
          Car : Ford
        </div>
        <div className="my-3">
          Type : Muscle
        </div>
        <div className="my-3">
          Year of Manufacture : 1999
        </div>
      </div>
    </div>
  );
}

export default App;
