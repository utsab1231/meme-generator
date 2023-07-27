import trollface from "../images/troll.png";
export default function Navbar() {
  return (
    <nav className="nav">
      <section className="nav--header">
        <img src={trollface} alt="trollface" />
        <h2>Meme Generator</h2>
      </section>
      <p className="nav--designer">Made by Utsab Adhikari</p>
    </nav>
  );
}
