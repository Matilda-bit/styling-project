import logo from '../assets/logo.png';
//import './Header.css';
import clsses from './Header.module.css';//Vanilla CSS

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={clsses.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
