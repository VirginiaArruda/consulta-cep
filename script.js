const button = document.querySelector('#btn')
const input = document.querySelector('#input-cep')
const subContainerDescription = document.querySelector('.sub-container-description')
const cep = document.querySelector('#cep')
const state = document.querySelector('#state')
const city = document.querySelector('#city')
const street = document.querySelector('#street')

async function getApiCep(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const responseJson = await response.json()
  return responseJson
}

button.addEventListener('click', async () => {
  const apiCep = await getApiCep(input.value)
  console.log(apiCep)
  cep.innerText = apiCep.cep
  state.innerText = apiCep.uf
  city.innerText = apiCep.localidade
  street.innerText = apiCep.logradouro
  subContainerDescription.style.display = 'block'
})