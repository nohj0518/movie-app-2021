import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    //preventDefault(); 역할
    //버거킹 먹기 쓰고 Submit했을때
    //refresh 되지 않도록 해줌
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((current) => [toDo, ...current]);
  };
  return (
    <html lang="ko">
      <body>
        <h1>My To Dos ({toDos.length}) </h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Write your to do..."
          />
          <button>Add To Do</button>
        </form>
        <hr />
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </body>
    </html>
  );
}
export default App;
