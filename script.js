document.getElementById("buyButton").addEventListener("click", function() {
    document.getElementById("message").innerText = "Anda telah membeli Dogecoin! 🚀";
});

const ctx = document.getElementById("priceChart").getContext("2d");

const priceChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"], // Ganti dengan data real-time nanti
        datasets: [{
            label: "Harga Dogecoin (USD)",
            data: [0.08, 0.09, 0.12, 0.10, 0.15, 0.14], // Contoh harga
            borderColor: "gold",
            backgroundColor: "rgba(255, 215, 0, 0.2)",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: false }
        }
    }
});let userBalance = 100; // Saldo DOGE awal
let dogePrice = 0.10; // Harga awal per DOGE

function buyDoge() {
    let amount = parseFloat(document.getElementById("buyAmount").value);
    if (amount > 0) {
        let cost = amount * dogePrice;
        document.getElementById("transactionMessage").innerText = 
            `Anda membeli ${amount} DOGE seharga $${cost.toFixed(2)}`;
        userBalance += amount;
    } else {
        alert("Masukkan jumlah yang valid!");
    }
}

function sellDoge() {
    let amount = parseFloat(document.getElementById("sellAmount").value);
    if (amount > 0 && amount <= userBalance) {
        let earnings = amount * dogePrice;
        document.getElementById("transactionMessage").innerText = 
            `Anda menjual ${amount} DOGE dan mendapatkan $${earnings.toFixed(2)}`;
        userBalance -= amount;
    } else {
        alert("Jumlah tidak valid atau saldo tidak cukup!");
    }
}
