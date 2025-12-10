var judyHopps = 3; 
var nickWilde = 2;  

var judyTotal = 0;
var nickTotal = 0;

var output = "=== LATIHAN PENJAGA ZOOTOPIA ===\n"; 

output += "Jarak lari per hari:\n";
output += "Judy Hopps: " + judyHopps + " km\n";
output += "Nick Wilde: " + nickWilde + " km\n\n";

for (var i = 1; i <= 5; i++) {
  judyTotal += judyHopps;
  nickTotal += nickWilde;
  
  output += "Hari " + i + ":\n";
  output += "- Judy Hopps lari " + judyHopps + " km\n";
  output += "- Nick Wilde lari " + nickWilde + " km\n\n";
}

output += "=== TOTAL JARAK SELAMA 5 HARI ===\n";
output += "Judy Hopps: " + judyTotal + " km\n";
output += "Nick Wilde: " + nickTotal + " km\n";

console.log(output);
