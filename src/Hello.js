import React from "react";

const Hello = () => {
  
  const [name, setname] = useState('');
  
  return <div>{name}</div>;
};

export default Hello;
