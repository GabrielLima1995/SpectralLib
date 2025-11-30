using SpectralLib
using LinearAlgebra
using JSON

struct ExampleDef
    id::String
    title::String
    description::String
    code::String
    runner::Function
end

function format_output(value)
    io = IOBuffer()
    show(io, MIME"text/plain"(), value)
    return String(take!(io))
end

chebyshev_examples = [
    ExampleDef(
        "chebyshev-transform",
        "ChebyshevTransform",
        "Aplica a transformada discreta para ir e voltar entre espaço físico e espectral.",
        """
using SpectralLib
values = [1.0, 0.0, -1.0, 0.5]
spectral = ChebyshevTransform(values, 1, 1)
back = ChebyshevTransform(spectral, 1, 2)
        """,
        () -> begin
            values = [1.0, 0.0, -1.0, 0.5]
            spectral = ChebyshevTransform(values, 1, 1)
            back = ChebyshevTransform(spectral, 1, 2)
            return (;spectral = round.(spectral; digits=4), recovered = round.(back; digits=4))
        end
    ),
    ExampleDef(
        "chebyshev-ds",
        "DS_Cheby",
        "Gera a matriz de diferenciação modal para polinômios de Chebyshev de ordem n.",
        """
using SpectralLib
D = DS_Cheby(3)
        """,
        () -> DS_Cheby(3)
    ),
    ExampleDef(
        "chebyshev-quadrature",
        "ChebyQuadrature",
        "Constrói nós e pesos de quadratura em [a, b].",
        """
using SpectralLib
z, w = ChebyQuadrature(-1.0, 1.0, 4, 1)
        """,
        () -> begin
            z, w = ChebyQuadrature(-1.0, 1.0, 4, 1)
            return (;nodes = round.(z; digits=4), weights = round.(w; digits=4))
        end
    ),
    ExampleDef(
        "chebyshev-basis",
        "Base_Cheby_n",
        "Avalia a base de Chebyshev até ordem n em um vetor de pontos.",
        """
using SpectralLib
x = [-1.0, 0.0, 1.0]
B = Base_Cheby_n(3, x)
        """,
        () -> Base_Cheby_n(3, [-1.0, 0.0, 1.0])
    ),
    ExampleDef(
        "chebyshev-matrix-product",
        "M_Prod_Cheby",
        "Matriz de multiplicação espectral para coeficientes de Chebyshev.",
        """
using SpectralLib
ah = [1.0, 0.5, 0.25]
M = M_Prod_Cheby(ah)
        """,
        () -> M_Prod_Cheby([1.0, 0.5, 0.25])
    ),
    ExampleDef(
        "chebyshev-nodes",
        "ChebyNodes",
        "Nós e pesos típicos para integrais de Chebyshev.",
        """
using SpectralLib
x, w = ChebyNodes(4, 2)
        """,
        () -> begin
            x, w = ChebyNodes(4, 2)
            return (;nodes = round.(x; digits=4), weights = round.(w; digits=4))
        end
    ),
    ExampleDef(
        "chebyshev-integration",
        "JS_Cheb",
        "Matriz operacional de integração para base de Chebyshev.",
        """
using SpectralLib
J = JS_Cheb(3)
        """,
        () -> JS_Cheb(3)
    ),
]

legendre_examples = [
    ExampleDef(
        "legendre-gauss-basis",
        "Legendre_Gauss_Basis",
        "Gera nós de Gauss-Legendre, pesos e matrizes associadas.",
        """
using SpectralLib
BL, BI, xG, wG = Legendre_Gauss_Basis(3)
        """,
        () -> begin
            BL, BI, xG, wG = Legendre_Gauss_Basis(3)
            return (;nodes = round.(xG; digits=4), weights = round.(wG; digits=4), basis = BL)
        end
    ),
    ExampleDef(
        "legendre-lobatto-basis",
        "Legendre_Lobatto_Basis",
        "Nós e pesos de Gauss-Lobatto com a respectiva matriz de base.",
        """
using SpectralLib
xLL, wGL, P = Legendre_Lobatto_Basis(4)
        """,
        () -> begin
            xLL, wGL, P = Legendre_Lobatto_Basis(4)
            return (;nodes = round.(xLL; digits=4), weights = round.(wGL; digits=4), basis = P)
        end
    ),
    ExampleDef(
        "legendre-radau-left",
        "Legendre_Radau_BasisL",
        "Base de Radau com nó fixo em -1.",
        """
using SpectralLib
xRL, wRL, RL = Legendre_Radau_BasisL(4)
        """,
        () -> begin
            xRL, wRL, RL = Legendre_Radau_BasisL(4)
            return (;nodes = round.(xRL; digits=4), weights = round.(wRL; digits=4), basis = RL)
        end
    ),
    ExampleDef(
        "legendre-radau-right",
        "Legendre_Radau_BasisR",
        "Base de Radau com nó fixo em 1.",
        """
using SpectralLib
xRR, wRR, RR = Legendre_Radau_BasisR(4)
        """,
        () -> begin
            xRR, wRR, RR = Legendre_Radau_BasisR(4)
            return (;nodes = round.(xRR; digits=4), weights = round.(wRR; digits=4), basis = RR)
        end
    ),
    ExampleDef(
        "legendre-eval",
        "eval_legendre",
        "Avalia polinômios de Legendre em pontos fornecidos.",
        """
using SpectralLib
vals = eval_legendre(3, [-0.5, 0.0, 0.5])
        """,
        () -> eval_legendre(3, [-0.5, 0.0, 0.5])
    ),
    ExampleDef(
        "legendre-quad-types",
        "GaussQuadTypes",
        "Quadratura genérica em um intervalo com vários tipos de nós.",
        """
using SpectralLib
z, w = GaussQuadTypes(-1.0, 1.0, 3, 2)
        """,
        () -> begin
            z, w = GaussQuadTypes(-1.0, 1.0, 3, 2)
            return (;nodes = round.(z; digits=4), weights = round.(w; digits=4))
        end
    ),
    ExampleDef(
        "legendre-ds",
        "DS_Legendre",
        "Matriz modal de diferenciação para Legendre.",
        """
using SpectralLib
D = DS_Legendre(3)
        """,
        () -> DS_Legendre(3)
    ),
    ExampleDef(
        "legendre-basis-matrix",
        "Base_Legendre_n",
        "Matriz de Vandermonde de Legendre até ordem n.",
        """
using SpectralLib
x = [-1.0, 0.0, 1.0]
B = Base_Legendre_n(3, x)
        """,
        () -> Base_Legendre_n(3, [-1.0, 0.0, 1.0])
    ),
    ExampleDef(
        "legendre-mprod",
        "M_Prod_Legendre",
        "Matriz de multiplicação espectral usando coeficientes de Legendre.",
        """
using SpectralLib
ah = [1.0, 0.5, 0.25]
M = M_Prod_Legendre(ah)
        """,
        () -> M_Prod_Legendre([1.0, 0.5, 0.25])
    ),
    ExampleDef(
        "legendre-integration",
        "JS_Leg",
        "Matriz operacional de integração para coeficientes de Legendre.",
        """
using SpectralLib
J = JS_Leg(3)
        """,
        () -> JS_Leg(3)
    ),
]

fourier_examples = [
    ExampleDef(
        "fourier-ds",
        "DS_Fourier",
        "Matriz modal de diferenciação para coeficientes reais de Fourier.",
        """
using SpectralLib
D = DS_Fourier(2)
        """,
        () -> DS_Fourier(2)
    ),
    ExampleDef(
        "fourier-fourdif",
        "fourdif",
        "Matriz de diferenciação espectral para pontos periódicos.",
        """
using SpectralLib
x, D = fourdif(5, 1)
        """,
        () -> begin
            x, D = fourdif(5, 1)
            return (;nodes = round.(x; digits=4), D = D)
        end
    ),
    ExampleDef(
        "fourier-multi-diff",
        "Multi_Diff_Mat",
        "Coleção de matrizes de diferenciação até uma ordem máxima.",
        """
using SpectralLib
x, mats = Multi_Diff_Mat(5, 2)
        """,
        () -> Multi_Diff_Mat(5, 2)
    ),
    ExampleDef(
        "fourier-barycentric",
        "Bary_Trig_Mat",
        "Interpolação trigonométrica em pontos arbitrários.",
        """
using SpectralLib
fk = [0.0, 1.0, 0.0, -1.0]
x = [0.1, 2.0]
t, P = Bary_Trig_Mat(fk, x)
        """,
        () -> begin
            fk = [0.0, 1.0, 0.0, -1.0]
            x = [0.1, 2.0]
            t, P = Bary_Trig_Mat(fk, x)
            return (;values = round.(t; digits=4), matrix = P)
        end
    ),
    ExampleDef(
        "fourier-integration",
        "JS_Fourier",
        "Matriz de integração modal para séries reais de Fourier.",
        """
using SpectralLib
I = JS_Fourier(2)
        """,
        () -> JS_Fourier(2)
    ),
    ExampleDef(
        "fourier-quad-function",
        "fourier_quad (função)",
        "Integra uma função periódica usando quadratura espectral.",
        """
using SpectralLib
integral = fourier_quad(x -> sin(x), 9)
        """,
        () -> fourier_quad(x -> sin(x), 9)
    ),
    ExampleDef(
        "fourier-quad-data",
        "fourier_quad (vetor)",
        "Integra dados discretos igualmente espaçados.",
        """
using SpectralLib
samples = sin.(range(0, stop=2pi, length=9))
value = fourier_quad(samples)
        """,
        () -> begin
            samples = sin.(range(0, stop=2pi, length=9))
            return fourier_quad(samples)
        end
    ),
    ExampleDef(
        "fourier-real-fft",
        "real_fft / real_ifft",
        "Transformada rápida real e inversa para vetores.",
        """
using SpectralLib
vals = [0.0, 1.0, 0.0, -1.0]
spectral = real_fft(vals)
recovered = real_ifft(spectral)
        """,
        () -> begin
            vals = [0.0, 1.0, 0.0, -1.0]
            spectral = real_fft(vals)
            recovered = real_ifft(spectral)
            return (;spectral = spectral, recovered = round.(recovered; digits=4))
        end
    ),
]

generic_examples = [
    ExampleDef(
        "generic-barycentric",
        "Bary_Interp",
        "Interpolação polinomial baricêntrica sobre pontos arbitrários.",
        """
using SpectralLib
xk = [-1.0, 0.0, 1.0]
fk = [1.0, 0.0, 1.0]
xnew = [-0.5, 0.5]
fnew, P = Bary_Interp(xk, fk, xnew)
        """,
        () -> begin
            xk = [-1.0, 0.0, 1.0]
            fk = [1.0, 0.0, 1.0]
            xnew = [-0.5, 0.5]
            fnew, P = Bary_Interp(xk, fk, xnew)
            return (;values = fnew, matrix = P)
        end
    ),
    ExampleDef(
        "generic-diff-matrix",
        "Generalized_Diff_Mat",
        "Matriz de diferenciação para pontos não uniformes.",
        """
using SpectralLib
xs = [-1.0, -0.2, 0.4, 1.0]
D = Generalized_Diff_Mat(xs)
        """,
        () -> Generalized_Diff_Mat([-1.0, -0.2, 0.4, 1.0])
    ),
]

const ALL_EXAMPLES = vcat(chebyshev_examples, legendre_examples, fourier_examples, generic_examples)

function materialize_examples()
    return [Dict(
        "id" => ex.id,
        "title" => ex.title,
        "description" => ex.description,
        "code" => ex.code,
        "output" => format_output(ex.runner())
    ) for ex in ALL_EXAMPLES]
end

function main()
    data = materialize_examples()
    emit_path = nothing
    for (idx, arg) in enumerate(ARGS)
        if arg == "--emit-json" && idx < length(ARGS)
            emit_path = ARGS[idx + 1]
        end
    end

    if emit_path !== nothing
        open(emit_path, "w") do io
            JSON.print(io, data; 4)
        end
    else
        for entry in data
            println("=== ", entry["title"], " ===")
            println(entry["description"])
            println("\n-- Código --\n", entry["code"])
            println("\n-- Saída --\n", entry["output"], "\n")
        end
    end
end

if abspath(PROGRAM_FILE) == @__FILE__
    main()
end
