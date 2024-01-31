import ImageOne from '../assets/icon1.png'
import ImageTwo from '../assets/icon2.png'
import ImageThree from '../assets/icon3.png'
import ImageFour from '../assets/icon4.png'

function Content() {
    return (
       <article style={{display: 'flex', justifyContent: 'space-between', color: 'black', padding: '32px 100px'}}>
        <div>
            <img src={ImageOne} alt='Declarative Logo' />
            <p>
                React make painless to create interactive UIs.
            </p>
        </div>

        <div>
            <img src={ImageTwo} alt='Components Logo' />
            <p>
                Build encapsulated components that manage their state
            </p>
        </div>

        <div>
            <img src={ImageThree} alt='Single way Logo' />
            <p>
                A set of inmutable values are passed to the component´s.
            </p>
        </div>

        <div>
            <img src={ImageFour} alt='JSX Logo' />
            <p>
                Statically-typed, designed to run on modern browsers.
            </p>
        </div>
       </article>
    );
}

export default Content;