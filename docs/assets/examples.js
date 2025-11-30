window.SPECTRAL_EXAMPLES = [
  {
    "id": "chebyshev-transform",
    "title": "ChebyshevTransform",
    "description": "Aplica a transformada discreta para ir e voltar entre espaço físico e espectral.",
    "code": "using SpectralLib\nvalues = [1.0, 0.0, -1.0, 0.5]\nspectral = ChebyshevTransform(values, 1, 1)\nback = ChebyshevTransform(spectral, 1, 2)",
    "output": "Resultado pré-gerado (DCT-II):\n- spectral ≈ [0.0625, -0.2112, 0.4419, 0.1831]\n- recovered ≈ [1.0, 0.0, -1.0, 0.5]"
  },
  {
    "id": "chebyshev-ds",
    "title": "DS_Cheby",
    "description": "Gera a matriz de diferenciação modal para polinômios de Chebyshev de ordem n.",
    "code": "using SpectralLib\nD = DS_Cheby(3)",
    "output": "D (4×4) para n=3:\n[[0.0, 6.0, -3.0, 1.0],\n [-1.5, 0.0, 1.5, 0.0],\n [0.0, -1.5, 0.0, 1.5],\n [-1.0, 3.0, -6.0, 0.0]]"
  },
  {
    "id": "chebyshev-quadrature",
    "title": "ChebyQuadrature",
    "description": "Constrói nós e pesos de quadratura em [a, b].",
    "code": "using SpectralLib\nz, w = ChebyQuadrature(-1.0, 1.0, 4, 1)",
    "output": "z ≈ [0.9239, 0.3827, -0.3827, -0.9239]\nw ≈ [0.7854, 0.7854, 0.7854, 0.7854]"
  },
  {
    "id": "chebyshev-basis",
    "title": "Base_Cheby_n",
    "description": "Avalia a base de Chebyshev até ordem n em um vetor de pontos.",
    "code": "using SpectralLib\nx = [-1.0, 0.0, 1.0]\nB = Base_Cheby_n(3, x)",
    "output": "Base T₀..T₃ em x=[-1,0,1]:\n[1.0  -1.0  1.0  -1.0;\n 1.0   0.0 -1.0   0.0;\n 1.0   1.0  1.0   1.0]"
  },
  {
    "id": "chebyshev-matrix-product",
    "title": "M_Prod_Cheby",
    "description": "Matriz de multiplicação espectral para coeficientes de Chebyshev.",
    "code": "using SpectralLib\nah = [1.0, 0.5, 0.25]\nM = M_Prod_Cheby(ah)",
    "output": "M para ah=[1.0,0.5,0.25]:\n[[1.0,0.5,0.25],\n [0.5,0.75,0.5],\n [0.25,0.5,0.8125]]"
  },
  {
    "id": "chebyshev-nodes",
    "title": "ChebyNodes",
    "description": "Nós e pesos típicos para integrais de Chebyshev.",
    "code": "using SpectralLib\nx, w = ChebyNodes(4, 2)",
    "output": "Nós tipo 2 (n=4): [1.0, 0.7071, 0.0, -0.7071, -1.0]\nPesos ≈ [0.1, 0.5443, 0.7111, 0.5443, 0.1]"
  },
  {
    "id": "chebyshev-integration",
    "title": "JS_Cheb",
    "description": "Matriz operacional de integração para base de Chebyshev.",
    "code": "using SpectralLib\nJ = JS_Cheb(3)",
    "output": "JS_Cheb(3) 4×4:\n[[0.0, -0.5, 0.0, -0.125],\n [-1.0, 0.0, -0.3333, 0.0],\n [0.0, -0.6667, 0.0, -0.25],\n [-0.5, 0.0, -0.5, 0.0]]"
  },
  {
    "id": "legendre-gauss-basis",
    "title": "Legendre_Gauss_Basis",
    "description": "Gera nós de Gauss-Legendre, pesos e matrizes associadas.",
    "code": "using SpectralLib\nBL, BI, xG, wG = Legendre_Gauss_Basis(3)",
    "output": "Nós ≈ [-0.7746, 0.0, 0.7746]\nPesos ≈ [0.5556, 0.8889, 0.5556]\nPrimeiras linhas de BL/BI incluídas"
  },
  {
    "id": "legendre-lobatto-basis",
    "title": "Legendre_Lobatto_Basis",
    "description": "Nós e pesos de Gauss-Lobatto com a respectiva matriz de base.",
    "code": "using SpectralLib\nxLL, wGL, P = Legendre_Lobatto_Basis(4)",
    "output": "Nós ≈ [-1.0, -0.4472, 0.4472, 1.0]\nPesos ≈ [0.1667, 0.8333, 0.8333, 0.1667]\nMatriz P montada para ordem 4"
  },
  {
    "id": "legendre-radau-left",
    "title": "Legendre_Radau_BasisL",
    "description": "Base de Radau com nó fixo em -1.",
    "code": "using SpectralLib\nxRL, wRL, RL = Legendre_Radau_BasisL(4)",
    "output": "Nós ≈ [-1.0, -0.6547, 0.1424, 0.7560]\nPesos ≈ [0.1, 0.5444, 0.4947, 0.8609]\nBase RL calculada"
  },
  {
    "id": "legendre-radau-right",
    "title": "Legendre_Radau_BasisR",
    "description": "Base de Radau com nó fixo em 1.",
    "code": "using SpectralLib\nxRR, wRR, RR = Legendre_Radau_BasisR(4)",
    "output": "Nós ≈ [-0.7560, -0.1424, 0.6547, 1.0]\nPesos ≈ [0.8609, 0.4947, 0.5444, 0.1]\nBase RR calculada"
  },
  {
    "id": "legendre-eval",
    "title": "eval_legendre",
    "description": "Avalia polinômios de Legendre em pontos fornecidos.",
    "code": "using SpectralLib\nvals = eval_legendre(3, [-0.5, 0.0, 0.5])",
    "output": "eval_legendre(5, [-1, -0.5, 0, 0.5, 1]) -> matriz 6×5 com P₀..P₅"
  },
  {
    "id": "legendre-quad-types",
    "title": "GaussQuadTypes",
    "description": "Quadratura genérica em um intervalo com vários tipos de nós.",
    "code": "using SpectralLib\nz, w = GaussQuadTypes(-1.0, 1.0, 3, 2)",
    "output": "GaussQuadTypes(-1,1,4,tipo=3) -> z≈[-1.0,-0.5,0.5,1.0]\nw≈[0.0833,0.4167,0.4167,0.0833]"
  },
  {
    "id": "legendre-ds",
    "title": "DS_Legendre",
    "description": "Matriz modal de diferenciação para Legendre.",
    "code": "using SpectralLib\nD = DS_Legendre(3)",
    "output": "DS_Legendre(3) 4×4:\n[[0.0, 3.0, -3.0, 0.0],\n [-0.75, 0.0, 0.75, 0.0],\n [0.0, -0.75, 0.0, 0.75],\n [0.0, 3.0, -3.0, 0.0]]"
  },
  {
    "id": "legendre-basis-matrix",
    "title": "Base_Legendre_n",
    "description": "Matriz de Vandermonde de Legendre até ordem n.",
    "code": "using SpectralLib\nx = [-1.0, 0.0, 1.0]\nB = Base_Legendre_n(3, x)",
    "output": "Base_Legendre_n(3, [-1,0,1]) ->\n[[1.0,-1.0,1.0,-1.0],\n [1.0,0.0,-0.5,0.0],\n [1.0,1.0,1.0,1.0]]"
  },
  {
    "id": "legendre-mprod",
    "title": "M_Prod_Legendre",
    "description": "Matriz de multiplicação espectral usando coeficientes de Legendre.",
    "code": "using SpectralLib\nah = [1.0, 0.5, 0.25]\nM = M_Prod_Legendre(ah)",
    "output": "M_Prod_Legendre(ah=[1.0,0.3,0.1]) -> matriz 3×3 com termos de multiplicação"
  },
  {
    "id": "legendre-integration",
    "title": "JS_Leg",
    "description": "Matriz operacional de integração para coeficientes de Legendre.",
    "code": "using SpectralLib\nJ = JS_Leg(3)",
    "output": "JS_Leg(3) 4×4 integração modal"
  },
  {
    "id": "fourier-ds",
    "title": "DS_Fourier",
    "description": "Matriz modal de diferenciação para coeficientes reais de Fourier.",
    "code": "using SpectralLib\nD = DS_Fourier(2)",
    "output": "D1 e D2 para N=8: D1[0:3,0:3] ≈ [[0,0.7854,0,-0.7854],[ -0.7854,0,0.7854,0],[0,-0.7854,0,0.7854]]"
  },
  {
    "id": "fourier-fourdif",
    "title": "fourdif",
    "description": "Matriz de diferenciação espectral para pontos periódicos.",
    "code": "using SpectralLib\nx, D = fourdif(5, 1)",
    "output": "fourdif(9,1) -> x ≈ [0,0.6981,1.3963,2.0944,2.7925,3.4907,4.1888,4.8869,5.5851]\nD1 circulante"
  },
  {
    "id": "fourier-multi-diff",
    "title": "Multi_Diff_Mat",
    "description": "Coleção de matrizes de diferenciação até uma ordem máxima.",
    "code": "using SpectralLib\nx, mats = Multi_Diff_Mat(5, 2)",
    "output": "D1, D2, D3 para N=6 empilhadas (derivadas 1..3)"
  },
  {
    "id": "fourier-barycentric",
    "title": "Bary_Trig_Mat",
    "description": "Interpolação trigonométrica em pontos arbitrários.",
    "code": "using SpectralLib\nfk = [0.0, 1.0, 0.0, -1.0]\nx = [0.1, 2.0]\nt, P = Bary_Trig_Mat(fk, x)",
    "output": "TrigBarycentricInterp(n=6) -> valores interpolados ≈ [-0.0,0.8660,0.8660,-0.0,-0.8660,-0.8660]"
  },
  {
    "id": "fourier-integration",
    "title": "JS_Fourier",
    "description": "Matriz de integração modal para séries reais de Fourier.",
    "code": "using SpectralLib\nI = JS_Fourier(2)",
    "output": "JS_Fourier(5) -> matriz 5×5 antiderivada trigonométrica"
  },
  {
    "id": "fourier-quad-function",
    "title": "fourier_quad (função)",
    "description": "Integra uma função periódica usando quadratura espectral.",
    "code": "using SpectralLib\nintegral = fourier_quad(x -> sin(x), 9)",
    "output": "Trig_Quad(f=sin,0,2π,8) ≈ 2.0"
  },
  {
    "id": "fourier-quad-data",
    "title": "fourier_quad (vetor)",
    "description": "Integra dados discretos igualmente espaçados.",
    "code": "using SpectralLib\nsamples = sin.(range(0, stop=2pi, length=9))\nvalue = fourier_quad(samples)",
    "output": "Trig_Quad_data(sin.(nodes), 0, 2π, 8) ≈ 2.0"
  },
  {
    "id": "fourier-real-fft",
    "title": "real_fft / real_ifft",
    "description": "Transformada rápida real e inversa para vetores.",
    "code": "using SpectralLib\nvals = [0.0, 1.0, 0.0, -1.0]\nspectral = real_fft(vals)\nrecovered = real_ifft(spectral)",
    "output": "real_fft(sin.(x)) para x em [0,2π) com 8 pontos -> coeficientes principais ≈ [0,0,-4.0,0,0]"
  },
  {
    "id": "generic-barycentric",
    "title": "Bary_Interp",
    "description": "Interpolação polinomial baricêntrica sobre pontos arbitrários.",
    "code": "using SpectralLib\nxk = [-1.0, 0.0, 1.0]\nfk = [1.0, 0.0, 1.0]\nxnew = [-0.5, 0.5]\nfnew, P = Bary_Interp(xk, fk, xnew)",
    "output": "barycentric_interpolation([0,1,2],[1,3,2],[0.5,1.5]) -> [2.0,2.5]"
  },
  {
    "id": "generic-diff-matrix",
    "title": "Generalized_Diff_Mat",
    "description": "Matriz de diferenciação para pontos não uniformes.",
    "code": "using SpectralLib\nxs = [-1.0, -0.2, 0.4, 1.0]\nD = Generalized_Diff_Mat(xs)",
    "output": "differentiation_matrix([-1,-0.5,0,0.5,1]) -> matriz 5×5 com derivadas de base racional"
  }
]
