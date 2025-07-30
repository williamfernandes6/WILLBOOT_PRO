// script.js
const API_URL = "https://willboot-backend.onrender.com"; // Substituir pela sua URL do Render

// Gerar sinais automáticos com inteligência simples
function gerarSinal() {
  const hora = new Date();
  const segundos = hora.getSeconds();
  const confianca = 80 + Math.floor(Math.random() * 20); // Confiança entre 80% e 99%
  const direcao = segundos % 2 === 0 ? "⬆️ Subida" : "⬇️ Queda";

  return {
    horario: hora.toLocaleTimeString(),
    direcao,
    confianca
  };
}

// Atualiza sinal na tela
function atualizarSinal() {
  const sinal = gerarSinal();
  const div = document.getElementById("sinais");
  div.innerHTML = `
    <p>⏰ ${sinal.horario}</p>
    <p>📈 Direção: ${sinal.direcao}</p>
    <p>🔒 Confiança: ${sinal.confianca}%</p>
  `;
  const audio = new Audio("sinal-novo.mp3");
  audio.play();
}

// Executa a cada minuto
setInterval(atualizarSinal, 60000);
window.onload = atualizarSinal;
