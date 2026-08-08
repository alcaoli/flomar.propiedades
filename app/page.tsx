 "use client";

"use client";

import { useEffect, useState } from "react";
import { imoveis } from "./dados/imoveis";

export default function Home() {
 const [busca, setBusca] = useState("");
const [tipoNegocio, setTipoNegocio] = useState("Comprar");
useEffect(() => {
  const parametros = new URLSearchParams(window.location.search);
  const tipo = parametros.get("tipo");

  if (tipo === "Comprar" || tipo === "Alugar") {
    setTipoNegocio(tipo);
  }
}, []);

  const imoveisFiltrados = imoveis.filter((imovel) => {
  const correspondeLocal =
    imovel.local.toLowerCase().includes(busca.toLowerCase());

  const correspondeNegocio =
    imovel.negocio === tipoNegocio;

  return correspondeLocal && correspondeNegocio;
});
  return (
    <main className="min-h-screen bg-[#163191] text-[#F4EFE9]">

{/* HEADER */}
<header className="relative w-full">
  <img
    src="/imoveis/flomar/flomar/header-flomar.jpeg"
    alt="Flomar Propiedades"
    className="w-full h-auto block"
  />

  <nav className="absolute top-0 right-0 px-8 py-7 flex items-center gap-8 text-sm">
    <button
      onClick={() => setTipoNegocio("Comprar")}
      className="hover:text-[#BAAA97] transition"
    >
      Comprar
    </button>

    <button
      onClick={() => setTipoNegocio("Alugar")}
      className="hover:text-[#BAAA97] transition"
    >
      Alugar
    </button>

    <a
      href="/sobre"
      className="hover:text-[#BAAA97] transition"
    >
      Sobre nós
    </a>

    <button className="border border-[#BAAA97] text-[#BAAA97] rounded-full px-5 py-2 hover:bg-[#BAAA97] hover:text-white transition">
      Entrar
    </button>
  </nav>
</header>

{/* HERO */}

      <section className="max-w-7xl mx-auto px-8 pt-20 pb-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#BAAA97] mb-6">
            Encontre seu próximo endereço
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight leading-[1.05]">
            Um lugar para
            <br />
            chamar de <span className="text-[#BAAA97]">lar.</span>
          </h1>

          <p className="mt-7 text-lg text-[#171614] max-w-xl leading-8">
            Casas e apartamentos escolhidos para acompanhar
            os próximos capítulos da sua história.
          </p>
        </div>

        {/* BUSCA */}
        <div className="mt-12 bg-white rounded-3xl p-2 max-w-5xl flex flex-col md:flex-row gap-2 shadow-[0_10px_40px_rgba(23,22,20,0.06)] border border-[#EDE7DD]">

          <input
            type="text"
            placeholder="Onde você quer morar?"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="flex-1 px-5 py-4 outline-none text-sm bg-transparent text-[#171614] placeholder:text-[#6F6255]"
          />

          <select
            value={tipoNegocio}
            onChange={(e) => setTipoNegocio(e.target.value)}
            className="px-5 py-4 outline-none text-sm bg-[#F7F3EC] rounded-2xl text-[#171614] cursor-pointer"
          >
            <option>Comprar</option>
            <option>Alugar</option>
          </select>

          <button
            onClick={() => {
              document
                .getElementById("imoveis")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#191714] text-[#F4EFE9] rounded-2xl px-8 py-4 text-sm font-medium hover:bg-[#BAAA97] hover:text-[#191714] transition-colors duration-300"
          >
            Buscar imóveis
          </button>

        </div>
      </section>

      {/* IMÓVEIS */}
      <section id="imoveis" className="bg-[#191714] py-20">
        <div className="max-w-7xl mx-auto px-8">

          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#BAAA97]">
                Seleção
              </p>

              <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 text-[#F4EFE9]">
                {tipoNegocio === "Comprar"
  ? "Imóveis para comprar"
  : "Imóveis para alugar"}
              </h2>

              <p className="text-sm text-[#F4EFE9]/50 mt-3">
                {imoveisFiltrados.length} imóvel(is) encontrado(s)
              </p>
            </div>

            <button className="hidden md:block text-sm text-[#F4EFE9] underline underline-offset-4 hover:text-[#BAAA97] transition">
              Ver todos
            </button>
          </div>

          {/* CARDS */}

          {imoveisFiltrados.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">

              {imoveisFiltrados.map((imovel) => (

                <article
                  key={imovel.id}
className="group cursor-pointer bg-white rounded-3xl p-3 pb-6 shadow-sm hover:shadow-md transition-shadow duration-300"                >

             <div className="h-72 rounded-2xlbg-[#BAAA97]/20 mb-5 overflow-hidden">

  {imovel.imagens.length > 0 ? (
  <img
    src={imovel.imagens[0]}
    alt={imovel.titulo}
    className="w-full h-full object-cover"
  />
) : (
    <div className="w-full h-full flex items-center justify-center text-[#B8A58E] text-sm">
      Foto do imóvel
    </div>
  )}

</div>

                  <p className="text-xs uppercase tracking-wider text-[#BAAA97]">
                    {imovel.tipo}
                  </p>

                 <p className="text-sm text-[#191714]/70 mt-1">
  {imovel.local}
</p>

            <a
  href={`/imoveis/${imovel.id}`}
  className="inline-block mt-4 text-sm font-medium text-[#191714] underline underline-offset-4 hover:text-[#163191] transition"
>
  Ver imóvel →
</a>

                  <p className="font-semibold mt-3 text-[#191714] text-lg">
                    {imovel.preco}
                  </p>
                </article>

              ))}

            </div>
          ) : (

            <div className="py-20 text-center">
              <p className="text-lg font-medium">
                Nenhum imóvel encontrado.
              </p>

              <p className="text-sm text-[#777770] mt-2">
                Tente buscar por outra cidade.
              </p>
            </div>

          )}

        </div>
      </section>

      {/* FOOTER */}

      <footer className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#777770]">
        <p>© 2026 imobiliária. Todos os direitos reservados.</p>

        <p>Seu próximo capítulo começa aqui.</p>
      </footer>

    </main>
  );
}