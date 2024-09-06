// model
const diskColors = ["green", "yellow", "blue", "purple", "chartreuse", "aqua", "darkgoldenrod"]
const leftTower = 0;
const midTower = 1;
const rightTower = 2;

// The index number of each disk in disks determines it's size, 0 is the smallest.
// Each disks value is the tower index that disk is located at
let nrOfDisks = 3;
let disks;
// Each tower in towers stores the disks that are at that tower, the list contains the disk index of each disk
let towers;

// Stores the disk index of the dragged disk
let dragged;

// Stores the elements of draggable and drop zones
let draggable;
let dropZoneLeftTower;
let dropZoneMidTower;
let dropZoneRightTower;



// view 
function updateView() {
    let isComplete = gameCompleted();
    let message = isComplete ? "Du klarte det!!" : "";
    let restartButton = isComplete ? /*html*/ `<button id="restartButton" onclick="startGame()">Restart spill</button>` : "";

    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Towers of Hanoi</h1>
        <h1>${message}</h1>
        <input type="number" min="3" max="7" step="1" value="${nrOfDisks}" onchange="nrOfDisks=this.value; startGame()">
        ${createGameContainerHtml()}
        ${restartButton}
    `;

    setDragAndDropVariables();
    establishEventListeners();
}

function createGameContainerHtml() {
    return /*HTML*/ `
        <div class="game-container">
            ${createTowerHtml(leftTower)}
            ${createTowerHtml(midTower)}
            ${createTowerHtml(rightTower)}
        </div>
    `;
}

function createTowerHtml(towerIndex) {
    return /*html*/ `
        <div id="dropzone${towerIndex}" class="tower-container">
            <div class="tower">
                ${createDisksAtTowerHtml(towerIndex)}                           
            </div>
        </div>
    `;
}

function createDisksAtTowerHtml(towerIndex) {
    let baseDiskSize = 30;
    let html = "";
    for (diskIndex of towers[towerIndex]) {
        html += createDiskHtml(baseDiskSize + (diskIndex * 20), towerIndex, diskIndex);
    }
    return html;
}

function createDiskHtml(width, towerIndex, diskIndex) {
    if (diskIsOnTop(diskIndex)) {
        return /*html*/ `
        <div onmouseover="assignDraggable(${towerIndex}, this.id)" 
            id="draggable${towerIndex}" 
            draggable="true" 
            class="disk draggable" 
            style="width: ${width}px;
                background-color: ${diskColors[diskIndex]}
            "
        ></div>
        `;
    }
    return /*html*/ `<div class="disk" style="width: ${width}px; background-color: ${diskColors[diskIndex]}"></div>`;
}

function setDragAndDropVariables() {
    if (towers[leftTower].length > 0) {
        draggable = document.getElementById('draggable0');
    } else if (towers[midTower].length > 0) {
        draggable = document.getElementById('draggable1');
    } else if (towers[midTower].length > 0) {
        draggable = document.getElementById('draggable2');
    }

    dropZoneLeftTower = document.getElementById('dropzone0');
    dropZoneMidTower = document.getElementById('dropzone1');
    dropZoneRightTower = document.getElementById('dropzone2');
}

function establishEventListeners() {
    dropZoneLeftTower.ondragover = function (event) {
        event.preventDefault()
    };
    dropZoneMidTower.ondragover = function (event) {
        event.preventDefault()
    };
    dropZoneRightTower.ondragover = function (event) {
        event.preventDefault()
    };

    dropZoneLeftTower.ondrop = function (event) {
        event.preventDefault();
        moveDisk(dragged, leftTower)
    };
    dropZoneMidTower.ondrop = function (event) {
        event.preventDefault();
        moveDisk(dragged, midTower)
    };
    dropZoneRightTower.ondrop = function (event) {
        event.preventDefault();
        moveDisk(dragged, rightTower);
    };
}



// Controller
function startGame() {
    disks = [];
    for (let diskNr = 1; diskNr <= nrOfDisks; diskNr++) {
        disks.push(leftTower)
    }

    towers = [[], [], []];
    for (let i = disks.length - 1; i >= 0; i--) {
        towers[leftTower].push(i)
    }

    updateView();
}

function moveDisk(diskIndex, toTowerIndex) {
    if (!islegalMove(diskIndex, toTowerIndex)) return

    towers[disks[diskIndex]].pop();
    towers[toTowerIndex].push(diskIndex);
    disks[diskIndex] = toTowerIndex;

    updateView();
}

function assignDraggable(towerIndex, id) {
    draggable = document.getElementById(id);
    let tower = towers[towerIndex];
    dragged = tower[tower.length - 1];
}



// Helper functions
function gameCompleted() {
    return towers[rightTower].length === disks.length;
}

function islegalMove(diskIndex, toTowerIndex) {
    return !movesToIllegalPosition(diskIndex, toTowerIndex)
        && !movesToCurrentPosition(diskIndex, toTowerIndex)
        && diskIsOnTop(diskIndex)
}

function movesToCurrentPosition(diskIndex, toTowerIndex) {
    return disks[diskIndex] == toTowerIndex;
}

function movesToIllegalPosition(diskIndex, toTowerIndex) {
    let tower = towers[toTowerIndex];
    if (tower[tower.length - 1] < diskIndex) return true;
    return false;
}

function diskIsOnTop(diskIndex) {
    let currentTower = towers[disks[diskIndex]];
    return currentTower[currentTower.length - 1] === diskIndex;
}