export default function LiquidButtonLayers() {
  return (
    <>
      <span className="loop-liquid-inner" aria-hidden="true">
        <span className="loop-liquid-blobs">
          <span className="loop-liquid-blob" />
          <span className="loop-liquid-blob" />
          <span className="loop-liquid-blob" />
          <span className="loop-liquid-blob" />
        </span>
      </span>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="loop-liquid-goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  );
}
