const inicio = new Date("2025-01-01");

function atualizarTempo() {

const agora = new Date();

const diff = agora - inicio;

const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

const horas = Math.floor(
(diff % (1000*60*60*24)) /
(1000*60*60)
);

const minutos = Math.floor(
(diff % (1000*60*60)) /
(1000*60)
);

const segundos = Math.floor(
(diff % (1000*60)) /
1000
);

document.getElementById("tempo").innerHTML =
`${dias} dias ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarTempo,1000);
