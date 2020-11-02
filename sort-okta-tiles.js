// ==UserScript==
// @name         Sort Okta Tiles
// @namespace    https://mcluck.tech
// @version      0.1
// @description  Sort Okta tiles alphabetically
// @author       You
// @match        https://*.okta.com/app/UserHome
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  setTimeout(function sortTiles() {
    const tiles = Array.from(document.querySelectorAll('.app-button-wrapper'));
    if (!tiles.length) {
      return setTimeout(sortTiles, 500);
    }

    tiles.sort((a, b) => {
      const aTitle = a
        .querySelector('.app-button-name')
        .innerText.toLocaleLowerCase();
      const bTitle = b
        .querySelector('.app-button-name')
        .innerText.toLocaleLowerCase();
      return aTitle.localeCompare(bTitle);
    });

    const parent = tiles[0].parentNode;
    for (const tile of tiles) {
      parent.removeChild(tile);
    }
    for (const tile of tiles) {
      parent.appendChild(tile);
    }
  }, 500);
})();
