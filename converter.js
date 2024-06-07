
function convertWeight() {
    
    let converterType = document.getElementById("converterType").value;
    
    let weightInput = parseFloat(document.getElementById("weightInput").value);
    
    let result;
    let unitLabel;
    switch(converterType) {
        case "kgToPounds":
            result = weightInput * 2.20462;
            unitLabel = "pounds";
            break;
        case "poundsToKg":
            result = weightInput / 2.20462;
            unitLabel = "kilograms";
            break;
        case "kgToGrams":
            result = weightInput * 1000;
            unitLabel = "grams";
            break;
        default:
            result = "Invalid converter type";
            unitLabel = "";
    }
    
    document.getElementById("result").textContent = result.toFixed(2);
    document.getElementById("unitLabel").textContent = unitLabel;
}

document.getElementById("weightInput").addEventListener("input", convertWeight);
