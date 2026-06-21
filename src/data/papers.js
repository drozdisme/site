// The five papers — one coherent programme on the boundaries of feature
// learning. They reference each other by their internal codes (TR / AB / BM).
// Edit titles, blurbs, and links here.

export const papers = [
  {
    code: "PR",
    featured: true,
    title:
      "Précis: A Minimax Barrier for Neural Scaling Laws, and a Sharp Criterion for When Emergence Is Real",
    blurb:
      "The two-page map of the whole programme. One geometric object pins the Chinchilla exponents to a provable minimax ceiling and supplies a sharp yes/no test for whether an observed emergent jump is real or a metric artifact - start here before the five manuscripts below.",
    links: [{ label: "PDF", href: "papers/precis.pdf" }],
  },
  {
    code: "TR",
    title: "Boundaries of Stationary Feature Learning",
    blurb:
      "A minimax barrier for scaling laws: any stationary feature-learning method obeys a hard ceiling on how fast it can learn from data - and beating it requires genuine compositional structure in the target, not better optimisation.",
    links: [{ label: "PDF", href: "papers/boundaries-stationary-feature-learning.pdf" }],
  },
  {
    code: "AB",
    title: "Foundations of a Theory of Composable Abstractions",
    blurb:
      "What makes knowledge reusable? A missing counterpart to computability, complexity and learnability - a theory of which structures let knowledge transfer, built around the defect of an abstraction and the subspace it generates.",
    links: [{ label: "PDF", href: "papers/composable-abstractions.pdf" }],
  },
  {
    code: "BM",
    title: "Spectral Scaling Benchmark",
    blurb:
      "A from-scratch (pure NumPy) test of the theory's five central predictions on a controlled synthetic manifold. The data-scaling barrier, the compositional jump and the self-organising attractor all come out as predicted.",
    links: [
      { label: "PDF", href: "papers/spectral-scaling-benchmark.pdf" },
      { label: "Code", href: "https://github.com/drozdisme/spectral_scaling", external: true },
    ],
  },
  {
    code: "PT",
    title: "The Phase Transition Theorem",
    blurb:
      "When is emergence real, and when is it a metric artifact? A sharp transition at a finite critical scale separates a stationary regime from a compositional one - real in L² precisely when the target carries genuine compositional structure.",
    links: [{ label: "PDF", href: "papers/phase-transition-theorem.pdf" }],
  },
  {
    code: "ACD",
    title: "The Absorption–Constraint Duality",
    blurb:
      "A non-asymptotic geometric account of feature learning: the trainable parameter manifold absorbs scaling and curvature, so geometric obstructions and phase transitions awaken only under constraint - freezing, weight-tying, or a noise boundary.",
    links: [{ label: "PDF", href: "papers/absorption-constraint-duality.pdf" }],
  },
];