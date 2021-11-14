import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onlyOnceAPI = () => {
    console.log("Call API...");
  };
  useEffect(onlyOnceAPI, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
    if (keyword !== "" && keyword.length > 5)
      console.log("SEARCH FOR", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <html lang="ko">
      <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here ..."
        />
        <h1>{counter}</h1>
        <button onClick={onClick}> click me </button>
      </div>
    </html>
  );
}
export default App;
