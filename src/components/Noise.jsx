import { useRef, useEffect } from "react";
import "./Noise.css";

const canvasSize = 128;
const frameCount = 10;
let globalNoiseFrames = null;

const generateNoiseFrames = (ctx, patternAlpha) => {
    if (globalNoiseFrames) return globalNoiseFrames;

    const frames = [];
    for (let f = 0; f < frameCount; f++) {
        const imageData = ctx.createImageData(canvasSize, canvasSize);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            const value = Math.random() * 255;
            data[i] = value;
            data[i + 1] = value;
            data[i + 2] = value;
            data[i + 3] = patternAlpha;
        }
        frames.push(imageData);
    }
    globalNoiseFrames = frames;
    return frames;
};

const Noise = ({
    patternSize = 250,
    patternScaleX = 1,
    patternScaleY = 1,
    patternRefreshInterval = 3,
    patternAlpha = 15
}) => {
    const grainRef = useRef(null);

    useEffect(() => {
        const canvas = grainRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let frame = 0;
        let animationId;

        // Pre-generate or use cached noise frames
        const noiseFrames = generateNoiseFrames(ctx, patternAlpha);

        const resize = () => {
            if (!canvas) return;
            canvas.width = canvasSize;
            canvas.height = canvasSize;

            // Style remains full viewport via CSS
        };

        const loop = () => {
            if (frame % patternRefreshInterval === 0) {
                const randomFrame = noiseFrames[Math.floor(Math.random() * frameCount)];
                ctx.putImageData(randomFrame, 0, 0);
            }
            frame++;
            animationId = window.requestAnimationFrame(loop);
        };

        resize();
        loop();

        return () => {
            window.cancelAnimationFrame(animationId);
        };
    }, [patternRefreshInterval, patternAlpha]);

    return (
        <canvas
            className="noise-overlay"
            ref={grainRef}
            style={{
                imageRendering: "pixelated",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.5 // Subtle visibility
            }}
        />
    );
};

export default Noise;
