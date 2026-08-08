
export default function Sobre() {
  return (
    <main className="bg-[#191714] min-h-screen text-[#F4EFE9]">
    
{/* HEADER */}
<header className="w-full bg-[#191714]">

  {/* IMAGEM */}
  <div className="w-full">
    <img
      src="/imoveis/flomar/flomar/header-flomar.jpeg"
      alt="Flomar Propiedades"
      className="w-full h-auto block"
    />
  </div>

  {/* MENU */}
  <nav className="w-full border-b border-[#F4EFE9]/10">
    <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-center gap-10 text-sm">

      <a
        href="/?tipo=Comprar"
        className="text-[#F4EFE9]/70 hover:text-[#BAAA97] transition"
      >
        Comprar
      </a>

<span className="h-4 w-px bg-[#BAAA97]/30"></span>
      <a
        href="/?tipo=Alugar"
        className="text-[#F4EFE9]/70 hover:text-[#BAAA97] transition"
      >
        Alugar
      </a>

<span className="h-4 w-px bg-[#BAAA97]/30"></span>
      <a
        href="/imoveis"
        className="text-[#F4EFE9]/70 hover:text-[#BAAA97] transition"
      >
        Imóveis
      </a>

      <span className="h-4 w-px bg-[#BAAA97]/30"></span>

      <a
        href="/sobre"
        className="text-[#BAAA97]"
      >
        Sobre nós
      </a>

    </div>
  </nav>

</header>

      {/* INTRODUÇÃO */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-28">
        <p className="text-sm uppercase tracking-[0.25em] text-[#BAAA97] mb-6">
          Sobre nós
        </p>

        <h1 className="max-w-5xl text-5xl md:text-7xl font-montserrat font-medium tracking-tight leading-[1.05]">
          Mais do que encontrar uma casa.
          <br />
          Encontrar um lugar para{" "}
          <span className="text-[#BAAA97]">viver.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-[#F4EFE9]/75 leading-8">
          Acreditamos que encontrar um imóvel não deveria ser apenas
          uma busca por metragem, localização ou preço. É sobre encontrar
          um espaço que faça sentido para a vida que você quer construir.
        </p>
      </section>

      {/* NOSSA FORMA DE TRABALHAR */}
      <section className="bg-[#191714] py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

          <div className="h-[500px] rounded-3xl bg-[#F4EFE9]/10 border border-[#F4EFE9]/10 flex items-center justify-center text-[#BAAA97]">
            <span className="text-sm uppercase tracking-[0.2em]">
              Foto da Flomar
            </span>
          </div>

          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#BAAA97]">
              Nossa forma de trabalhar
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 text-[#F4EFE9]">
              Curadoria antes de quantidade.
            </h2>

            <p className="mt-6 text-[#F4EFE9]/65 leading-8">
              Selecionamos imóveis pensando não apenas em suas
              características, mas também na experiência que eles
              podem proporcionar.
            </p>

            <p className="mt-5 text-[#F4EFE9]/65 leading-8">
              Nosso objetivo é tornar a procura por um novo endereço
              mais simples, humana e tranquila.
            </p>
          </div>

        </div>
      </section>

      {/* NOSSO PROPÓSITO */}
      <section className="bg-[#163191] max-w-7xl mx-auto px-8 py-28">
        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.2em] text-[#BAAA97]">
            Nosso propósito
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 leading-tight">
            Espaços escolhidos para histórias que ainda serão{" "}
            <span className="text-[#BAAA97]">vividas.</span>
          </h2>

          <p className="mt-6 text-[#F4EFE9]/70 leading-8 max-w-2xl">
            Cada imóvel representa uma possibilidade.
            Um novo começo, uma mudança de fase ou simplesmente
            um lugar para chamar de seu.
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#F4EFE9]/10 px-8 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#F4EFE9]/50">
        <p>
          © 2026 Flomar Propiedades. Todos os direitos reservados.
        </p>

        <p>
          Seu próximo capítulo começa aqui.
        </p>
      </footer>
    </main>
  );
}