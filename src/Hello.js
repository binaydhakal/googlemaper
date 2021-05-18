import React from "react";

const Hello = () => {
  const [name, setName] = useState("");

  const writeName = () => {
    setName("hello man");
  };

  return (
    <div>
      {writeName}
      {name}
    </div>
  );
};

export default Hello;
