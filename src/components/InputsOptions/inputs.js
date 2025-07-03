import './inputs.css';

export const inputsOption = () => {

  const inputsOptions = document.createElement('FORM');
  inputsOptions.classList.add('inputs__options');

  inputsOptions.innerHTML = `
    <label for="ExcludeSpaces" class="checkbox-container excludeSpaces dark">
      <input type="checkbox" id="ExcludeSpaces">
      <span class="custom-checkbox"></span>
      Exclude Spaces
    </label>

    <label for="SetCharacter" class="checkbox-container setCharacter dark">
      <input type="checkbox" id="SetCharacter">
      <span class="custom-checkbox"></span>
      Set Character Limit
    </label>

    <p class="reading__time dark">Approx. reading time: <1 minute</p>
    `;
  return inputsOptions;
}
