// grab the form
const form = document.querySelector(`form`);

// when the form is submitted event listener)
form.addEventListener(`submit`, async (event) => {
  event.preventDefault();
  try {
    // grab the input
    const input = document.querySelector(`input`);
    
    // get the value from the input
    const pokemonName = input.value;
    
    // call the pokemon API with the value (https://pokeapi.co/api/v2/pokemon/[name])
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = await response.json();
  
    const pokemonAbilities = [];
  
    for(let i = 0; i < pokemonData.abilities.length; i++) {
      // const abilities = pokemonData.abilities;
      // const individualAbility = abilities[i];
      // const ability = individualAbility.ability;
      // const abilityName = ability.name;
      // pokemonAbilities.push(abilityName);
      
      pokemonAbilities.push(pokemonData.abilities[i].ability.name);
    }
  
    // create a new list item
    const pokemonLI = document.createElement(`li`);
    
    // put the pokemon information in the list item
    pokemonLI.innerHTML = `
      <h3>${pokemonData.name}</h3>
      <p>${pokemonData.name} weighs ${pokemonData.weight} lbs</p>
      <p>${pokemonData.name} has the following abilities: ${pokemonAbilities.join(', ')}</p>
    `
  
    // grab the ol
    const ol = document.querySelector(`ol`);
  
    // attach the list item to the ol
    ol.append(pokemonLI);
  } catch(err) {
    // const body = document.querySelector(`body`);
    // const errorMessage = document.createElement(`p`);
    // errorMessage.innerText = `There was an error fetching your pokemon`;
    // body.append(errorMessage);
    alert(`There was an error fetching your pokemon`);
  }
})










