const ctxA = document.getElementById('graphA').getContext('2d');
const ctxB = document.getElementById('graphB').getContext('2d');

let dataA = []; // Data for Graph A
let dataB = []; // Data for Graph B

let chartA; // Chart instance for Graph A
let chartB; // Chart instance for Graph B

// Function to create charts
function createCharts() {
    chartA = new Chart(ctxA, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Graph A',
                data: dataA,
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

    chartB = new Chart(ctxB, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Graph B',
                data: dataB,
                backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red color
                borderColor: 'rgba(255, 99, 132, 1)',
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
}

// Function to generate random data
function generateData() {
    return Math.floor(Math.random() * 1);
}

// Function to add data to Graph A
function addToGraphA() {
    const newData = generateData();
    dataA.push(newData);
    chartA.data.labels.push(`Bar ${chartA.data.labels.length + 1}`);
    chartA.update();
}

// Function to delete data from Graph B
function deleteFromGraphB() {
    if (dataA.length > 0) {
        const removedData = dataA.pop();
        dataB.push(removedData);
        chartA.data.labels.pop();
        chartB.data.labels.push(`Bar ${chartB.data.labels.length + 1}`);
        chartA.update();
        chartB.update();
    }
}

// Create charts when the page loads
createCharts();