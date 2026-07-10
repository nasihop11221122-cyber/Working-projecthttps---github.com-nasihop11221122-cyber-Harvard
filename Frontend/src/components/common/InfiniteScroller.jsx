import { useEffect, useRef } from 'react';

const InfiniteScroller = ({
  dataArray,
  isSvg = false,
  preloaded = false,
  direction = 'left',
  speed = 80,
  gap = 24,
  imgHeight = 80,
}) => {
  const trackRef        = useRef(null);
  const animFrameRef    = useRef(null);
  const scrollPosRef    = useRef(0);
  const lastTimestampRef = useRef(null);
  const oneSetWidthRef  = useRef(0);   // width/height of ONE copy of the list
  const isPausedRef     = useRef(false);

  const isVertical = direction === 'up'    || direction === 'down';
  const isReverse  = direction === 'right' || direction === 'down';

  // Safely normalize — always an array, never undefined/null
  const items = Array.isArray(dataArray) && dataArray.length > 0 ? dataArray : null;

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !items) return;

    // ── Animation loop ──────────────────────────────────────────────────────
    const animate = (timestamp) => {
      if (!isPausedRef.current) {
        if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;

        const elapsedSeconds  = (timestamp - lastTimestampRef.current) / 1000;
        const pixelsToMove    = speed * elapsedSeconds;
        const oneSetWidth     = oneSetWidthRef.current;

        lastTimestampRef.current = timestamp;

        if (oneSetWidth > 0) {
          if (isReverse) {
            scrollPosRef.current += pixelsToMove;
            if (scrollPosRef.current >= 0) scrollPosRef.current -= oneSetWidth;
          } else {
            scrollPosRef.current -= pixelsToMove;
            if (scrollPosRef.current <= -oneSetWidth) scrollPosRef.current += oneSetWidth;
          }

          track.style.transform = isVertical
            ? `translateY(${scrollPosRef.current}px)`
            : `translateX(${scrollPosRef.current}px)`;
        }
      } else {
        // Keep timestamp fresh while paused so no jump on resume
        lastTimestampRef.current = timestamp;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    // ── Measure one set width from DOM ──────────────────────────────────────
    const measureOneSet = () => {
      const totalSize = isVertical ? track.scrollHeight : track.scrollWidth;
      const newOneSetWidth = totalSize / 2; // track has exactly 2 copies

      if (newOneSetWidth <= 0) return;

      // If already scrolling and size changed (e.g. image loaded), keep position proportional
      if (oneSetWidthRef.current > 0 && newOneSetWidth !== oneSetWidthRef.current) {
        scrollPosRef.current = (scrollPosRef.current / oneSetWidthRef.current) * newOneSetWidth;
      }

      oneSetWidthRef.current = newOneSetWidth;
    };

    // ── Start loop ──────────────────────────────────────────────────────────
    lastTimestampRef.current = null;
    cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(animate);

    // ── Measure strategy ────────────────────────────────────────────────────
    if (isSvg || preloaded) {
      // Inline SVGs and preloaded images are already in memory — measure next frame
      requestAnimationFrame(measureOneSet);
    } else {
      // Raw URLs — wait for each image in the first copy to load, then remeasure
      const firstCopyImgs = Array.from(track.querySelectorAll('img')).slice(0, items.length);

      firstCopyImgs.forEach(img => {
        const onSettle = () => measureOneSet();
        if (img.complete && img.naturalWidth > 0) {
          onSettle();
        } else {
          img.addEventListener('load',  onSettle, { once: true });
          img.addEventListener('error', onSettle, { once: true });
        }
      });
    }

    return () => cancelAnimationFrame(animFrameRef.current);
  }, [items, isSvg, preloaded, direction, speed, isVertical, isReverse]);

  if (!items) return null;

  const doubledItems = [...items, ...items];

  const itemStyle = {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    pointerEvents: 'none',
    height: `${imgHeight}px`,
    [isVertical ? 'marginBottom' : 'marginRight']: `${gap}px`,
  };

  return (
    <div
      style={{ overflow: 'hidden', width: '100%', height: isVertical ? '100%' : 'auto' }}
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          flexDirection: isVertical ? 'column' : 'row',
          alignItems: 'center',
          willChange: 'transform',
          width: isVertical ? '100%' : 'max-content',
        }}
      >
        {doubledItems.map((item, i) => (
          <div key={i} style={itemStyle}>
            {isSvg ? (
              <span
                style={{ height: '100%', width: 'auto', display: 'flex', alignItems: 'center' }}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ) : (
              <img
                src={item}
                alt=""
                draggable={false}
                style={{ height: '100%', width: 'auto', objectFit: 'contain', display: 'block', borderRadius: '8px' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroller;