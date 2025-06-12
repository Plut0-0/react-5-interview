
export default function MyApp() {
    const Images = ["bike", "computerDraw", "nightcity"];
    const [current, setCurrent] = useState(0);

    const handleNextClick = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % Images.length);
    };

    const handleBackClick = () => {
        setCurrent((prevCurrent) => (prevCurrent - 1 + Images.length) % Images.length);
    };

    return (
        <div>
            <h1>React Interview</h1>
            <h2>Image Carousel</h2>

            <div className='imageContainer'>
                <img
                    className='image'
                    src={`/img/${Images[current]}.png`}
                    alt={`Image ${Images[current]}`}
                />
            </div>

            <div className='btnContainer'>
                <MyBackButton onClick={handleBackClick} />
                <MyNextButton onClick={handleNextClick} />
            </div>
        </div>
    );
}

function MyBackButton({ onClick }) {
    return (
        <button onClick={onClick} className="btn">Back</button>
    );
}

function MyNextButton({ onClick }) {
    return (
        <button onClick={onClick} className="btn">Next</button>
    );
}