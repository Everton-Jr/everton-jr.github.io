let habilidades = document.querySelector('.habilidades');

const HABILIDADES_NIVEIS = [
  'Básico',                 // 0
  'Básico-Intermediário',   // 1
  'Intermediário',          // 2
  'Intermediário-Avançado', // 3
  'Avançado'                // 4
];              

// aqui é onde fica todas as minhas habilidades armazenadas
const HABILIDADES = [
  {Nome: 'HTML 5', NivelConhecimento: 2},
  {Nome: 'Lua', NivelConhecimento: 3},
  {Nome: 'C++', NivelConhecimento: 0},
  {Nome: 'JavaScript', NivelConhecimento: 1},
  {Nome: 'Sass/Scss', NivelConhecimento: 0},
  {Nome: 'CSS 3', NivelConhecimento: 2}
]

function CompararPorNivelConhecimento(obj1, obj2) {
  return obj1.NivelConhecimento + obj2.NivelConhecimento;
}

HABILIDADES.sort(CompararPorNivelConhecimento);

let message = '';
for (let i = 0; i < HABILIDADES.length; i++) {
  message += `
  <li>
    <h3>${HABILIDADES[i].Nome}</h3>
    <img src="assets/img/icon_${HABILIDADES[i].Nome}.png" alt="Icone ${HABILIDADES[i].Nome}">
  </li>`;
}

habilidades.innerHTML = message;