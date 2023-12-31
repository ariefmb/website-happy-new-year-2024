import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";
import img from "./assets/img.jpg";

function App() {
    const [newYearMessage, setNewYearMessage] = useState([
        "aiiyangg bentar lagi 2024 😊😊",
    ]);

    const [showImage, setShowImage] = useState(false);

    const particleInit = async (engine) => {
        await loadFireworksPreset(engine);
    };

    function timeLeft() {
        const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
        const nowDate = new Date().getTime();
        const timeRemaining = newYearDate - nowDate;
        return timeRemaining;
    }

    const handleComplete = () => {
        setNewYearMessage([
            "Selamat Tahun Baru 2024 Aiiyaanggg",
            "🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇",
        ]);
        setShowImage(true);
    };

    return (
        <>
            <Particles init={particleInit} options={{ preset: "fireworks" }} />
            <div className="flex flex-col justify-center items-center min-h-screen gap-5 text-center">
                <span className="text-white text-2xl font-bold z-50 px-4 ">
                    <Typewriter
                        words={newYearMessage}
                        loop={false}
                        cursorStyle={"|"}
                        cursor
                        deleteSpeed={10}
                    />
                </span>
                <div className="text-white text-2xl z-50">
                    <Countdown
                        date={Date.now() + timeLeft()}
                        onComplete={handleComplete}
                    />
                </div>
                {showImage && (
                    <img
                        src={img}
                        alt=""
                        width={"50%"}
                        height={"auto"}
                        className="z-50 mt-5"
                    />
                )}
            </div>
        </>
    );
}

export default App;
