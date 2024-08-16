function calculateTiles() {
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);
    var tileSize = document.getElementById('tile-size').value.split(',');
    var wastagePercentage = parseFloat(document.getElementById('wastage').value);
    var pricePerSqm = parseFloat(document.getElementById('price-per-sqm').value);

    var tileWidth = parseFloat(tileSize[0]);
    var tileHeight = parseFloat(tileSize[1]);

    var area = width * height;
    var tileArea = tileWidth * tileHeight;
    var numTiles = Math.ceil(area / tileArea);

    var wastageFactor = 1 + (wastagePercentage / 100);
    var totalTiles = Math.ceil(numTiles * wastageFactor);

    // Calculate the total cost based on the number of tiles and price per square meter
    var totalCost = totalTiles * tileArea * pricePerSqm;

    document.getElementById('result').innerText = "Nombre de carreaux nécessaires : " + totalTiles;
    document.getElementById('total-cost').innerText = "Total à payer : " + totalCost.toFixed(2) + " DHS";
}