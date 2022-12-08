import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export default function Product(props) {
  const [merch, setMerch] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/1`)
      .then((res) => res.json())

      .then((data) => setMerch(data))
      .catch((err) => {
        console.error("get merch error: ", err);
      });
  }, []);

  console.log(merch.rating?.count);

  return (
    <div>
      <h1>Merchandise</h1>
      <div>
        <h3>
          Item: {merch.title}
          <br />
          Available: {merch.rating?.count}
        </h3>
        <h3>Description: {merch.description}</h3>
        <img src={merch.image} alt={"your mom"} />
      </div>
    </div>
  );
}
