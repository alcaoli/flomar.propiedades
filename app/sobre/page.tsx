export default function Sobre() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#171614]">

      <header className="flex items-center justify-between px-8 py-7 max-w-7xl mx-auto border-b border-[#EDE7DD]">

        <a
          href="/"
          className="text-2xl font-serif font-medium tracking-tight"
        >
          imobiliária<span className="text-[#B8A58E]">.</span>
        </a>

        <nav className="flex items-center gap-8 text-sm">

          <a
  href="/?tipo=Comprar"
  className="hover:text-[#6F6255] transition"
>
  Comprar
</a>

          <a
  href="/?tipo=Alugar"
  className="hover:text-[#6F6255] transition"
>
  Alugar
</a>

          <a
            href="/sobre"
            className="text-[#6F6255]"
          >
            Sobre nós
          </a>

        </nav>

      </header>

      <section className="max-w-7xl mx-auto px-8 pt-28 pb-24">

        <p className="text-sm uppercase tracking-[0.25em] text-[#B8A58E] mb-6">
          Sobre nós
        </p>

        <h1 className="max-w-4xl text-5xl md:text-7xl font-serif font-medium tracking-tight leading-[1.05]">
          Mais do que encontrar uma casa.
          <br />
          Encontrar um lugar para viver.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-[#6F6255] leading-8">
          Acreditamos que encontrar um imóvel não deveria ser apenas
          uma busca por metragem, localização ou preço. É sobre encontrar
          um espaço que faça sentido para a vida que você quer construir.
        </p>

      </section>

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

          <div className="h-[500px] rounded-3xl bg-[#EDE7DD] flex items-center justify-center text-[#B8A58E]">
            Foto da imobiliária
          </div>

          <div className="max-w-xl">

            <p className="text-sm uppercase tracking-[0.2em] text-[#B8A58E]">
              Nossa forma de trabalhar
            </p>

            <h2 className="text-4xl font-serif font-medium mt-4">
              Curadoria antes de quantidade.
            </h2>

            <p className="mt-6 text-[#6F6255] leading-8">
              Selecionamos imóveis pensando não apenas em suas
              características, mas também na experiência que eles
              podem proporcionar.
            </p>

            <p className="mt-5 text-[#6F6255] leading-8">
              Nosso objetivo é tornar a procura por um novo endereço
              mais simples, humana e tranquila.
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="max-w-2xl">

          <p className="text-sm uppercase tracking-[0.2em] text-[#B8A58E]">
            Nosso propósito
          </p>

          <h2 className="text-4xl font-serif font-medium mt-4">
            Espaços escolhidos para histórias que ainda serão vividas.
          </h2>

          <p className="mt-6 text-[#6F6255] leading-8">
            Cada imóvel representa uma possibilidade.
            Um novo começo, uma mudança de fase ou simplesmente
            um lugar para chamar de seu.
          </p>

        </div>

      </section>

      <footer className="border-t border-[#EDE7DD] max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#6F6255]">
        <p>
          © 2026 imobiliária. Todos os direitos reservados.
        </p>

        <p>
          Seu próximo capítulo começa aqui.
        </p>
      </footer>

    </main>
  );
}