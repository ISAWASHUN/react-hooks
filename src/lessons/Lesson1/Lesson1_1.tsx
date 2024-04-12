import { ChangeEvent, useState } from "react";

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState<string>("John Doe");

  const handleClick = () => {
    setAge(age + 1);
  }

  return (
    <div>
      <input
      onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text"
      value={name} className="border p-2 rounded-md"
      />
      <button onClick={handleClick} className="border p-2 rounded-md bg-red-100">{age}</button>
      <p></p>
    </div>
  );
};

export default Lesson1_1;