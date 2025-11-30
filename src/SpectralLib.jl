module SpectralLib

using LinearAlgebra
using FFTW
using ToeplitzMatrices

include("Chebyshev.jl")
include("Fourier.jl")
include("Legendre.jl")
include("Generic.jl")

using .Chebyshev
using .Fourier
using .Legendre
using .Generic

export Chebyshev, Fourier, Legendre, Generic

# Chebyshev re-exports
export DS_Cheby, ChebyQuadrature, ChebyshevTransform, Base_Cheby_n,
       M_Prod_Cheby, ChebyNodes, JS_Cheb

# Legendre re-exports
export Legendre_Gauss_Basis, Legendre_Lobatto_Basis, Legendre_Radau_BasisL,
       Legendre_Radau_BasisR, eval_legendre, GaussQuadTypes, DS_Legendre,
       Base_Legendre_n, M_Prod_Legendre, JS_Leg

# Fourier re-exports
export DS_Fourier, fourdif, Multi_Diff_Mat, Bary_Trig_Mat, JS_Fourier,
       fourier_quad, real_fft, real_ifft

# Generic utilities re-exports
export Bary_Interp, Generalized_Diff_Mat

end
