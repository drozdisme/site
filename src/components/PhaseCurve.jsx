import { useState, useId } from "react";
import styles from "./PhaseCurve.module.css";

/* ----- geometry (computed once) ----- */
const W = 640;
const H = 440;
const PAD = { l: 56, r: 28, t: 30, b: 44 };
const XC = 0.5; // critical point
const K = 13; // steepness of the principal transition

const sig = (t, k = K, c = XC) => 1 / (1 + Math.exp(-k * (t - c)));
const X = (t) => PAD.l + t * (W - PAD.l - PAD.r);
const Y = (v) => H - PAD.b - v * (H - PAD.t - PAD.b);

function buildCurve() {
  const N = 180;
  let d = "";
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const x = X(t).toFixed(1);
    const y = Y(sig(t)).toFixed(1);
    d += i === 0 ? `M${x} ${y}` : ` L${x} ${y}`;
  }
  return d;
}
function buildArea() {
  const N = 180;
  let d = `M${X(0).toFixed(1)} ${Y(0).toFixed(1)}`;
  for (let i = 0; i <= N; i++) {
    d += ` L${X(i / N).toFixed(1)} ${Y(sig(i / N)).toFixed(1)}`;
  }
  d += ` L${X(1).toFixed(1)} ${Y(0).toFixed(1)} Z`;
  return d;
}

const CURVE = buildCurve();
const AREA = buildArea();
const GRID_X = [0.25, 0.5, 0.75];
const GRID_Y = [0.25, 0.5, 0.75];

export default function PhaseCurve() {
  const [open, setOpen] = useState(false);
  const uid = useId().replace(/:/g, "");
  const strokeId = `stroke-${uid}`;
  const areaId = `area-${uid}`;

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={`${styles.surface} ${open ? styles.isOpen : ""}`}
        aria-expanded={open}
        aria-label={open ? "Collapse the diagram" : "Expand the phase-transition diagram"}
        onClick={() => setOpen((v) => !v)}
      >
        <svg className={styles.svg} viewBox={`0 0 ${W} ${H}`} role="img" aria-hidden="true">
          <defs>
            <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="var(--sky-light)" />
              <stop offset="0.5" stopColor="var(--sky)" />
              <stop offset="1" stopColor="var(--sky-deep)" />
            </linearGradient>
            <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--sky)" stopOpacity="0.16" />
              <stop offset="1" stopColor="var(--sky)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* chrome: axes, grid, regions — only visible when expanded */}
          <g className={styles.chrome}>
            <rect
              className={styles.region}
              x={X(XC)}
              y={PAD.t}
              width={X(1) - X(XC)}
              height={H - PAD.b - PAD.t}
            />
            {GRID_X.map((g) => (
              <line key={`gx${g}`} className={styles.grid} x1={X(g)} y1={PAD.t} x2={X(g)} y2={H - PAD.b} />
            ))}
            {GRID_Y.map((g) => (
              <line key={`gy${g}`} className={styles.grid} x1={PAD.l} y1={Y(g)} x2={W - PAD.r} y2={Y(g)} />
            ))}
            <line className={styles.half} x1={PAD.l} y1={Y(0.5)} x2={W - PAD.r} y2={Y(0.5)} />

            {/* axes */}
            <polyline
              className={styles.axis}
              points={`${PAD.l},${PAD.t - 2} ${PAD.l},${H - PAD.b} ${W - PAD.r},${H - PAD.b}`}
            />
            {/* labels */}
            <text className={styles.axisLabel} x={(PAD.l + (W - PAD.r)) / 2} y={H - PAD.b + 26} textAnchor="middle">
              log N
            </text>
            <text
              className={styles.axisLabel}
              x={0}
              y={0}
              transform={`translate(${PAD.l - 30} ${(PAD.t + (H - PAD.b)) / 2}) rotate(-90)`}
              textAnchor="middle"
            >
              order Δ
            </text>

            {/* critical line + node */}
            <line className={styles.crit} x1={X(XC)} y1={PAD.t} x2={X(XC)} y2={H - PAD.b} />
            <circle className={styles.glow} cx={X(XC)} cy={Y(0.5)} r="16" fill={`url(#${strokeId})`} />
            <circle className={styles.node} cx={X(XC)} cy={Y(0.5)} r="3.6" />
            <text className={styles.critLabel} x={X(XC) + 9} y={Y(0.5) - 8}>
              N
              <tspan dx="0.5" dy="3" fontSize="9">
                c
              </tspan>
            </text>
          </g>

          {/* the curve — always visible */}
          <path className={styles.area} d={AREA} fill={`url(#${areaId})`} />
          <path
            className={styles.curve}
            d={CURVE}
            fill="none"
            stroke={`url(#${strokeId})`}
            pathLength="1"
            strokeLinecap="round"
          />
        </svg>

        {!open && (
          <span className={styles.hint} aria-hidden="true">
            <span className={styles.hintDot}>+</span>
            tap to explore
          </span>
        )}
      </button>

      {open && (
        <div className={styles.popup} role="dialog" aria-label="About the diagram">
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <p className={styles.popTitle}>Phase transition</p>
          <p className={styles.popBody}>
            The order parameter Δ stays flat, then jumps sharply at a critical scale N
            <sub>c</sub> - where learning crosses from a stationary regime (rate β₀) into a
            compositional one (β′ &gt; β₀).
          </p>
          <a className={styles.popLink} href="papers/phase-transition-theorem.pdf">
            → The Phase Transition Theorem
          </a>
        </div>
      )}
    </div>
  );
}
