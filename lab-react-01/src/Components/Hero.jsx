import './Hero.css'
import ImageLogo from '../assets/ironhack-logo-xs.png'
import ImageMenuTop from '../assets/menu-top-xs.png'

function Hero() {
    return (
        <header>
            <nav>    
                <img src={ImageLogo} alt= 'IronHack logo' className='portrait' />
                <img src={ImageMenuTop} alt= 'Top menu' className='portrait' id='logo'/>
            </nav>

            <div className='textContainer'>
                <h1>
                    Say Hello to ReactJS
                </h1>
                <p>
                    You will learn how to use the most popular frontend library and become a super Ninja developer
                </p>
            </div>

            <div className="btn">
                <a src="facebook.com" className="btn-primary">Awesome!</a>
            </div>
        </header>
    )
}

export default Hero;