import React from "react";

export default function PetSupply(props) {
  const clog = (msg) => {
    console.log(msg);
  };
  function openTitch() {
    window.open("https://www.twitch.tv/directory/following/live");
  }
  const { name, brand, img } = props;
  const Image = ({ img }) => <img src={img} alt="Bird food" />;
  const Name = ({ name }) => <h1>{name}</h1>;
  const Brand = ({ brand }) => (
    <h4 style={({ color: "#e6e6e6" }, { fontSize: ".75rem" })}>{brand}</h4>
  );
  return (
    <article className="petsupply">
      <Image img={img}></Image>
      <Name name={name} />
      <Brand brand={brand} />
      <button
        onMouseEnter={(evt) => console.log(evt)}
        onMouseLeave={() => clog("wtf")}
        onDoubleClick={openTitch}
      >
        Ir ao site
      </button>
    </article>
  );
}
