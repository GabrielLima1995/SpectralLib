# SpectralLib

Biblioteca Julia que agrega os métodos espectrais do repositório em um pacote
único. Os módulos `Chebyshev`, `Legendre`, `Fourier` e `Generic` são carregados
com `using SpectralLib`.

## Uso rápido

```julia
pkg> activate .
pkg> instantiate

using SpectralLib
z, w = ChebyQuadrature(-1.0, 1.0, 6, 1)
D = DS_Legendre(4)
```

## Exemplos reproduzíveis

Todos os exemplos de API estão em `examples/examples.jl`. Gere a versão JSON
consumida pelo frontend com:

```julia
julia --project=. examples/examples.jl --emit-json docs/assets/examples.json
```

Abra `docs/index.html` no navegador para ver a documentação responsiva, rodar os
exemplos pré-gerados e copiar os snippets.
