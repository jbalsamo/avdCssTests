import solidLogo from '../assets/solid.svg';
import cssShield from '/css-3.svg';

export default function Header() {
    return (
        <header>
            <div>
                <img src={cssShield} class="logo" alt="CSS logo" />
                <img src={solidLogo} class="logo solid" alt="Solid logo" />
            </div>
            <h1>CSS + Solid</h1>
        </header>
    )
}