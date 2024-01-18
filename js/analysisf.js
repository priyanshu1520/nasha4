const ctx = document.getElementById('myChart').getContext('2d');

let initialData = []; // Initial empty data

// Initial empty chart
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Fluctuating Bar Graph',
            data: initialData,
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to generate random data
function generateData() {
    return Math.floor(Math.random() * 1);
}

// Function to add new data to the chart
function addData(valueToAdd) {
    const newData = generateData() + valueToAdd;
    initialData.push(newData);
    myChart.data.labels.push(`Bar ${myChart.data.labels.length + 1}`);
    myChart.data.datasets[0].data = initialData;
    myChart.update();
}