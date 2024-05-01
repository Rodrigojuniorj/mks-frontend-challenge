import Image from "next/image";
import './navbar.scss';

export function Navbar() {
  return (
    <nav className="header">
      <div className="title">
        <h1>MKS</h1>
        <span>Sistemas</span>
      </div>

      <button className="card_button">
        <Image src="/store/cart.svg" width={19} height={18} alt="Cart" />
        <span>0</span>
      </button>
    </nav>
  );
}
