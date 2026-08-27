document.addEventListener("DOMContentLoaded", () => {
  const btnContraste = document.getElementById("btn-contraste");
  const btnAumentar = document.getElementById("btn-aumentar-texto");
  const btnDiminuir = document.getElementById("btn-diminuir-texto");

  let tamanhoAtualFonte = 100;
  const TAMANHO_MIN = 90;
  const TAMANHO_MAX = 150;
  const PASSO = 10;

  // Alternar alto contraste
  btnContraste?.addEventListener("click", () => {
    const ativo = document.body.classList.toggle("alto-contraste");
    btnContraste.setAttribute("aria-pressed", ativo);
  });

  // Função unificada para ajuste de texto
  const alterarTamanhoFonte = (delta) => {
    const novoTamanho = tamanhoAtualFonte + delta;
    if (novoTamanho >= TAMANHO_MIN && novoTamanho <= TAMANHO_MAX) {
      tamanhoAtualFonte = novoTamanho;
      document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
    }
  };

  btnAumentar?.addEventListener("click", () => alterarTamanhoFonte(PASSO));
  btnDiminuir?.addEventListener("click", () => alterarTamanhoFonte(-PASSO));
});