'use client';

import { useEffect, useRef, useState } from 'react';

export function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState<'default' | 'interactive' | 'project'>('default');
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => {
      const outer = outerRef.current;
      if (!outer) return;
      outer.style.transform = `translate(-50%, -50%) scale(1.8)`;
      outer.style.opacity = '0';
      setTimeout(() => {
        outer.style.transform = `translate(-50%, -50%) scale(1)`;
        outer.style.opacity = '1';
      }, 300);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="project"]')) {
        setHoverState('project');
      } else if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="interactive"]')
      ) {
        setHoverState('interactive');
      }
    };

    const onOut = () => setHoverState('default');

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      outerPos.current.x = lerp(outerPos.current.x, pos.current.x, 0.12);
      outerPos.current.y = lerp(outerPos.current.y, pos.current.y, 0.12);

      if (innerRef.current) {
        innerRef.current.style.left = `${pos.current.x}px`;
        innerRef.current.style.top = `${pos.current.y}px`;
      }
      if (outerRef.current) {
        outerRef.current.style.left = `${outerPos.current.x}px`;
        outerRef.current.style.top = `${outerPos.current.y}px`;
      }
      if (labelRef.current) {
        labelRef.current.style.left = `${outerPos.current.x}px`;
        labelRef.current.style.top = `${outerPos.current.y}px`;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  const isProject = hoverState === 'project';
  const isInteractive = hoverState === 'interactive';

  return (
    <>
      <div
        ref={innerRef}
        className="fixed z-[10000] pointer-events-none"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#FAFAFA',
          transform: 'translate(-50%, -50%)',
          opacity: isProject ? 0 : 1,
          transition: 'opacity 0.2s',
        }}
      />
      <div
        ref={outerRef}
        className="fixed z-[10000] pointer-events-none"
        style={{
          width: isInteractive ? 56 : 32,
          height: isInteractive ? 56 : 32,
          borderRadius: '50%',
          border: `1.5px solid ${isInteractive ? '#6366F1' : 'rgba(255,255,255,0.4)'}`,
          background: isInteractive ? 'rgba(99,102,241,0.08)' : 'transparent',
          transform: 'translate(-50%, -50%)',
          opacity: isProject ? 0 : 1,
          transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.2s, background 0.2s, opacity 0.2s',
        }}
      />
      <div
        ref={labelRef}
        className="fixed z-[10000] pointer-events-none text-xs font-semibold tracking-wider uppercase"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: isProject ? 1 : 0,
          background: 'rgba(99,102,241,0.15)',
          color: '#818CF8',
          padding: '8px 16px',
          borderRadius: 999,
          border: '1px solid rgba(99,102,241,0.3)',
          transition: 'opacity 0.2s',
          whiteSpace: 'nowrap',
        }}
      >
        VIEW →
      </div>
    </>
  );
}
