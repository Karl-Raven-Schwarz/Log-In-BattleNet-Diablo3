//region button
let region_btn = document.querySelector('.region-btn');
let region = document.querySelector('.region');

region_btn.onclick = function() {
    region.classList.toggle('open-region')
}

const listRegions = document.querySelectorAll('.list-regions');

function EnableLinksRegions() {
    listRegions.forEach((btn) => btn.classList.remove('active-regions'));
    this.classList.add('active-regions');
    document.getElementById("region-text").innerHTML = this.innerHTML;
    region.classList.toggle('open-region');
}

listRegions.forEach((btn) => {
    btn.addEventListener('click', EnableLinksRegions)
})

//settings button
let settings_btn = document.querySelector('.settings-btn');
region = document.querySelector('.region');

settings_btn.onclick = function() {
    region.classList.toggle('open-settings')
}

const listSettings = document.querySelectorAll('.list-settings');

function EnableLinksSettings() {
    listSettings.forEach((btn) => btn.classList.remove('active-settings'));
    this.classList.add('active-settings');
    region.classList.toggle('open-settings');
}

listSettings.forEach((btn) => {
    btn.addEventListener('click', EnableLinksSettings)
})