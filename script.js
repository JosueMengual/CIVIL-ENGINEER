const mixData = {
    "1:2:3": { cement: 350, sand: 0.56, gravel: 0.84, water: 180 },
    "1:2:4": { cement: 300, sand: 0.45, gravel: 0.90, water: 170 },
    "1:3:3": { cement: 280, sand: 0.60, gravel: 0.60, water: 170 }
};

const volumeInput = document.getElementById('volume');
const mixRatioSelect = document.getElementById('mix-ratio');
const calculateBtn = document.getElementById('calculate-btn');
const resultsContainer = document.getElementById('results');
const errorMessage = document.getElementById('error-message');

const resCement = document.getElementById('res-cement');
const resSand = document.getElementById('res-sand');
const resGravel = document.getElementById('res-gravel');
const resWater = document.getElementById('res-water');

const calculateMaterials = () => {
    const volume = parseFloat(volumeInput.value);
    const selectedMix = mixRatioSelect.value;

    if (isNaN(volume) || volume <= 0) {
        errorMessage.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        return;
    }

    errorMessage.classList.add('hidden');

    const baseMaterials = mixData[selectedMix];

    resCement.textContent = (baseMaterials.cement * volume).toFixed(2);
    resSand.textContent = (baseMaterials.sand * volume).toFixed(2);
    resGravel.textContent = (baseMaterials.gravel * volume).toFixed(2);
    resWater.textContent = (baseMaterials.water * volume).toFixed(2);

    resultsContainer.classList.remove('hidden');
};

calculateBtn.addEventListener('click', calculateMaterials);

volumeInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        calculateMaterials();
    }
});
