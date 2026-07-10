




import { useEffect, useRef, useCallback } from 'react';

const AnimatedNumber = ({ number, steps = 45, stepMs = 35 }) => {
  const containerRef = useRef(null);
  const currentRef = useRef(0);
  const timerRef = useRef(null);
  const hasAnimated = useRef(false);
  const isAnimating = useRef(false);

  const getCharWidth = useCallback(() => {
    const el = containerRef.current;
    if (!el) return 0;
    const s = Object.assign(document.createElement('span'), { textContent: '0' });
    const cs = getComputedStyle(el);
    s.style.cssText = `visibility:hidden;position:fixed;top:0;left:0;pointer-events:none;
      font-size:${cs.fontSize};font-family:${cs.fontFamily};
      font-weight:${cs.fontWeight};font-variant-numeric:tabular-nums;`;
    document.body.appendChild(s);
    const w = s.getBoundingClientRect().width;
    s.remove();
    return w;
  }, []);

  const colStyle = (cw) =>
    `position:relative;overflow:hidden;display:inline-block;
     height:1.2em;width:${cw}px;vertical-align:top;`;

  const spanStyle = () =>
    `position:absolute;left:0;top:0;width:100%;
     text-align:center;line-height:1.2em;`;

  // Pure CSS transition instead of GSAP
const animateSpan = (span, fromY, toY, onDone) => {
  // Set the transition properties
  span.style.transition = `transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1)`;
  
  // Force reflow
  span.getBoundingClientRect();

  // 1. Move to the target Y position
  span.style.transform = `translateY(${toY})`;

  // 2. Logic: If it's moving TO the center (0%), it should be visible (1)
  //    If it's moving AWAY from the center, it should fade out (0)
  span.style.opacity = toY === '0%' ? '1' : '0';

  span.addEventListener('transitionend', onDone, { once: true });
};

  const buildInitial = useCallback((numStr) => {
    const el = containerRef.current;
    if (!el) return;
    el.innerHTML = '';
    const cw = getCharWidth();
    numStr.split('').forEach((ch) => {
      const col = document.createElement('div');
      col.dataset.col = 'true';
      col.style.cssText = colStyle(cw);
      const span = document.createElement('span');
      span.textContent = ch;
      span.style.cssText = spanStyle();
      span.style.transform = 'translateY(0%)';
      span.style.opacity = '1';
      col.appendChild(span);
      el.appendChild(col);
    });
  }, [getCharWidth]);

  const animateDigits = useCallback((fromNum, toNum) => {
    const el = containerRef.current;
    if (!el || fromNum === toNum) return;

    const fromStr = String(fromNum);
    const toStr = String(toNum);
    const len = Math.max(fromStr.length, toStr.length);
    const pFrom = fromStr.padStart(len, '0');
    const pTo = toStr.padStart(len, '0');
    const cw = getCharWidth();
    const half = Math.ceil(len / 2);

    let cols = el.querySelectorAll('[data-col]');
    if (cols.length !== len) {
      buildInitial(pFrom);
      cols = el.querySelectorAll('[data-col]');
      if (cols.length !== len) return;
    }

    cols.forEach((col, i) => {
      col.style.width = `${cw}px`;
      const outgoing = col.querySelector('span:last-child');
      if (!outgoing || outgoing.textContent === pTo[i]) return;

      const fromTop = i >= half;
      const enterY = fromTop ? '-110%' : '110%';
      const exitY = fromTop ? '110%' : '-110%';

      // Incoming span
      const incoming = document.createElement('span');
      incoming.textContent = pTo[i];
      incoming.style.cssText = spanStyle();
      incoming.style.transform = `translateY(${enterY})`;
      incoming.style.opacity = '1';
      col.appendChild(incoming);

      // Animate outgoing out
      animateSpan(outgoing, '0%', exitY, () => outgoing.remove());

      // Animate incoming in
      animateSpan(incoming, enterY, '0%', () => {});
    });
  }, [getCharWidth, buildInitial]);

  const startCounting = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    if (timerRef.current) clearInterval(timerRef.current);

    const from = currentRef.current;
    const target = number;
    if (from === target) { isAnimating.current = false; return; }

    let step = 0;
    let last = from;

    timerRef.current = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      const val = Math.round(from + (target - from) * eased);

      if (val !== last) { animateDigits(last, val); last = val; }

      if (step >= steps) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        if (last !== target) animateDigits(last, target);
        currentRef.current = target;
        isAnimating.current = false;
      }
    }, stepMs);
  }, [number, steps, stepMs, animateDigits]);

  useEffect(() => {
    buildInitial('0');
    currentRef.current = 0;
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [buildInitial]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (number !== currentRef.current) {
      hasAnimated.current = false;
      isAnimating.current = false;
      if (timerRef.current) clearInterval(timerRef.current);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        startCounting();
        observer.disconnect();
      }
    }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

    observer.observe(el);
    return () => { observer.disconnect(); if (timerRef.current) clearInterval(timerRef.current); };
  }, [number, startCounting]);

  return (
    <span
      ref={containerRef}
      style={{ display: 'inline-flex', lineHeight: '1.2em', fontVariantNumeric: 'tabular-nums' }}
    />
  );
};

export default AnimatedNumber;