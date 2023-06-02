let myChart = document.getElementById("line-chart").getContext("2d");

var gradient = myChart.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(245, 240, 255, 1)");
gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

let datapoints = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "data",
      data: [120, 120, 70, 160, 90, 230, 230],
      tension: 0.45,
      fill: true,
      backgroundColor: gradient,
      borderColor: "#8655FB",
    },
  ],
};

let config = {
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: -25,
      bottom: -27,
    },
    margin: {
      left: 0,
      bottom: 0,
    },
  },
  interaction: {
    intersect: false,
    mode: "nearest",
    axis: "x",
  },
  plugins: {
    tooltip: {
      enabled: true,
      yAlign: "bottom",
      xAlign: "center",
      displayColors: false,
      backgroundColor: "#8655FB",
      callbacks: {
        title: () => null, // or function () { return null; }
        label: function (context) {
          let label = "";
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0.1,
      position: "average",
    },
  },
  scales: {
    x: {
      border: {
        width: 0,
      },
      grid: {
        display: false,
      },
      display: true,
      title: {
        display: true,
      },
      ticks: {
        font: {
          size: 8,
        },
      },
    },
    y: {
      border: {
        width: 0,
      },
      ticks: {
        maxTicksLimit: 4,
        stepSize: 100,
        beginAtZero: true,
        font: {
          size: 8,
        },
      },
      grid: {
        display: false,
      },
      display: true,
      title: {
        display: true,
        //   text: "Value",
      },
      suggestedMin: 0,
      max: 300,
    },
  },
};

let lineChart = new Chart(myChart, {
  type: "line",
  data: datapoints,
  options: config,
});


let btns = document.querySelectorAll(".btn-grp > .btn");

for (let i of Array.from(btns)) {
  i.onclick = () => {
    for (let j of Array.from(btns)) {
      j.querySelector("div.color").classList.remove("red");
      j.querySelector("div.content > div > i").classList.remove("active");
    }
    i.querySelector("div.color").classList.add("red");
    i.querySelector("div.content > div > i").classList.add("active");
  };
}

let bell = document.querySelector(
  "body > div > div.main-container.flex > div.topbar.flex > div.topbar-right.flex > button"
);
bell.onclick = () => {
  bell.querySelector(".dummy").classList.toggle("dot");
};
