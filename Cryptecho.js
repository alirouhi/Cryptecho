var navigation_options = document.getElementsByClassName("navigation-options");
for (var i = 0; i < navigation_options.length; i++) {
    navigation_options[i].addEventListener("click", toggleSel);
}
function toggleSel() {
    this.classList.toggle("navigation-option-selected");
    this.getElementsByClassName("navigation-options-text")[0].classList.toggle(
        "navigation-options-text-selected"
    );
}

var prices = document.getElementsByClassName("coin-price-changes");
for (i = 0; i < prices.length; i++) {
    var pricex = prices[i].innerHTML.split("");
    pricex.pop();
    pricex = pricex.join("");
    pricex = parseFloat(pricex);
    if (pricex > 0) {
        prices[i].style.color = "55AC64";
    }
    if (pricex < 0) {
        prices[i].style.color = "CD6A6A";
    }
}
var prices = document.getElementsByClassName("sixth-column");
for (i = 0; i < prices.length; i++) {
    var pricex = prices[i].innerHTML.split("");
    pricex = pricex.join("");
    pricex = parseFloat(pricex);
    if (pricex > 0) {
        prices[i].style.color = "55AC64";
    }
    if (pricex < 0) {
        prices[i].style.color = "CD6A6A";
    }
}

const data = {
    labels: ["Friday", "Saturday", "Sunday", "Yesterday", "Today"],
    datasets: [
        {
            label: "Daily Portfolio",

            data: [760, 550, 760, 640, 760],
            backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea, scales } = chart;
                if (!chartArea) {
                    return null;
                }
                return bgGradient(ctx, chartArea, scales);
            },
            borderColor: ["rgba(27, 119, 228, 1)", "rgba(0, 0, 0, 1)"],
            tension: 0.4,
            fill: true,
        },
    ],
};

// config
const config = {
    type: "line",
    data,
    options: {
        scales: {
            y: {
                beginAtZero: false,
            },
        },
        title: {
            display: false,
        },
    },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

// Instantly assign Chart.js version
const chartVersion = document.getElementById("chartVersion");
chartVersion.innerText = Chart.version;

function bgGradient(ctx, chartArea, scales) {
    const { left, right, top, bottom, width, height } = chartArea;
    const { x, y } = scales;
    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0, "rgba(27,119,228,1)");
    gradientBackground.addColorStop(1, "rgba(27,119,228,0.4)");
    return gradientBackground;
}
