/* 
import "./AutoTaco.css";

export function GiveTaco() {
  return (
    <img
      className="taco-image"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CPvKNPELNr1HjZdSU6J5kuUbUadZ4WYLLA&s"
      alt="Delicious Taco"
    />
  );
}

export default function AutoTaco({name = ['Name'], count = 1}) {
  const tacoslist = [];
  for (let i = 0; i < count; i++) {
    tacoslist.push(
      <div>
        <GiveTaco />
        <h2>to {name[i]}</h2>
        <br />
      </div>
    );
  }
  
  return (
    <section>
      <h1>Taco List</h1>
      <br />
      {tacoslist}
    </section>
  );
}
*/