import { useState } from "react";

const App = () => {
  const [person, setPerson] = useState(
    {
      fullName: "",
      age: ""
    }
  )

  return (
    <>

      <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">
        <label htmlFor="fullName">FullName:</label>
        <input type="text" name="fullName" className="form-control mb-4" placeholder="fuulName" id="fullName" onChange={(e) => setPerson({ ...person, fullName: e.target.value })} />

        <label htmlFor="age">Age:</label>
        <input type="text" name="age" className="form-control" id="fullName" placeholder="age" onChange={(e) => setPerson({ ...person, age: e.target.value })} />
      </div>
      <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">
        <h3>fullName: {person.fullName}</h3>
        <h3>age: {person.age}</h3>
        <h3>{JSON.stringify(person)}</h3>
      </div>

    </>
  );
};

export default App;

