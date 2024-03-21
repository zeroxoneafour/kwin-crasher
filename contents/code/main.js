// main.js - kwin crasher


// either one of these windowTileChanged functions crashes kwin. try them both!
function windowTileChanged(window, tile) {
    tile.remove();
}

/*
function windowTileChanged(window, tile) {
    window.tile.remove();
}
*/

function windowAdded(window) {
    window.tileChanged.connect(windowTileChanged.bind(this, window));
}

workspace.windowAdded.connect(windowAdded);
