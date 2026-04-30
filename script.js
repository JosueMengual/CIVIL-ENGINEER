const mixData = {
    "1:2:3": { cement: 350, sand: 0.56, gravel: 0.84, water: 180 },
    "1:2:4": { cement: 300, sand: 0.45, gravel: 0.90, water: 170 },
    "1:3:3": { cement: 280, sand: 0.60, gravel: 0.60, water: 170 }
};

const volumeInput = document.getElementById('volume');
const mixRatioSelect = document.getElementById('mix-ratio');
const calculateBtn = document.getElementById('calculate-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsContainer = document.getElementById('results');
const historyList = document.getElementById('history-list');

let calculationHistory = [];

const init = () => {
    const savedVolume = localStorage.getItem('lastVolume');
    const savedRatio = localStorage.getItem('lastRatio');
    const savedHistory = localStorage.getItem('calcHistory');

    if (savedVolume) volumeInput.value = savedVolume;
    if (savedRatio) mixRatioSelect.value = savedRatio;
    if (savedHistory) {
        calculationHistory = JSON.parse(savedHistory);
        renderHistory();
    }
};

const saveToLocalStorage = (volume, ratio, history) => {
    localStorage.setItem('lastVolume', volume);
    localStorage.setItem('lastRatio', ratio);
    localStorage.setItem('calcHistory', JSON.stringify(history));
};

const renderHistory = () => {
    historyList.innerHTML = '';
    calculationHistory.slice().reverse().forEach(item => {
        const card = document.createElement('div');
        card.className = 'history-card';
        card.innerHTML = `
            <span class="date">${item.date}</span>
            <div class="details">
                <strong>Vol:</strong> ${item.vol} m³ | <strong>Mix:</strong> ${item.ratio}<br>
                C: ${item.c}kg | S: ${item.s}m³ | G: ${item.g}m³ | W: ${item.w}L
            </div>
        `;
        historyList.appendChild(card);
    });
};

const calculate = () => {
    const vol = parseFloat(volumeInput.value);
    const ratio = mixRatioSelect.value;

    if (isNaN(vol) || vol <= 0) return alert("Please enter a valid volume");

    const base = mixData[ratio];
    const results = {
        c: (base.cement * vol).toFixed(2),
        s: (base.sand * vol).toFixed(2),
        g: (base.gravel * vol).toFixed(2),
        w: (base.water * vol).toFixed(2)
    };

    document.getElementById('res-cement').textContent = results.c;
    document.getElementById('res-sand').textContent = results.s;
    document.getElementById('res-gravel').textContent = results.g;
    document.getElementById('res-water').textContent = results.w;
    resultsContainer.classList.remove('hidden');

    const newEntry = {
        date: new Date().toLocaleString(),
        vol,
        ratio,
        ...results
    };

    calculationHistory.push(newEntry);
    if (calculationHistory.length > 5) calculationHistory.shift(); 

    saveToLocalStorage(vol, ratio, calculationHistory);
    renderHistory();
};

const clearData = () => {
    localStorage.clear();
    calculationHistory = [];
    volumeInput.value = '';
    resultsContainer.classList.add('hidden');
    renderHistory();
};

calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clearData);
window.addEventListener('load', init);
