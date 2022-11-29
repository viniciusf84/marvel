import Logo from "../../assets/images/marvel_logo.png";

export function Header() {
  return (
    <header>
      <div className="wrapper">
        <img src={Logo} alt="Marvel" />
      </div>
    </header>
  );
}
