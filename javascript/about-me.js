

//beginning of color changer

const body = document.querySelector('.main');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
function toggleMode() {
    body.classList.toggle('dark-mode');

    const modeMessage = body.classList.contains('dark-mode') ?
        'Dark Mode'
        : "Light Mode"

    modeStatus.innerText = "Changed to " + modeMessage;
}

modeToggle.addEventListener('click', toggleMode);

//animation btn code
$(document).ready(function () {
    $("#hide-me").click(function () {
        $("#facts").hide();

    });
    $("#show-me").click(function () {
        $("#facts").show();

    });
});
/*
// Select container element and append an SVG with a height and width
const pieChartElement = d3
    .select('#pie-charts')
    .append('svg')
    .attr('width', 500)
    .attr('height', 200)


// Create the input data
const pieChartData = [
    { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 30 }
]


// Create a pie layout
const pie = d3.pie()
    .value(function (d) { return d.value })


// Transform the data using the pie layout
const pieData = pie(pieChartData)


// Use the transformed data to create a pie chart
pieChartElement
    .selectAll("path")
    .data(pieData)
    .enter()
    .append("path")
    .attr("d", d3.arc()
        .innerRadius(0)
        .outerRadius(100))
    .attr("transform", "translate(250, 100)")
    .style("fill", function (d) { return d3.schemeCategory10[d.index] })
*/
//beginning of bar chart javascript below 
const Planguages = [
    { Language: 'Javascript', percentage: 63 },
    { Language: 'HTML/CSS', percentage: 52 },
    { Language: 'Python', percentage: 49 },
    { Language: 'SQL', percentage: 48 },
    { Language: 'TypeScript', percentage: 38 }
]

const margin = { top: 10, right: 20, bottom: 60, left: 80 }
const width = 1000 - margin.left - margin.right
const height = 500 - margin.top - margin.bottom

const x = d3.scaleBand()
    .domain(Planguages.map(d => d.Language))
    .range([0, width])
    .padding(0.2)


// Create a linear scale for the y-axis
const y = d3.scaleLinear()
    .domain([0, d3.max(Planguages, d => d.percentage)])
    .range([height, 0])

    const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom + 20)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)
  
  
    // Create rectangles for each data point and add interactivity with mouseover and mouseout events
  svg.selectAll('.bar')
    .data(Planguages)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.Language))
    .attr('width', x.bandwidth())
    .attr('y', d => y(d.percentage))
    .attr('height', d => height - y(d.percentage))
    .attr('fill', 'steelblue')
    .on("mouseover", function (d) {
      d3.select(this).style("fill", "#5db0f5")
    })
    .on("mouseout", function (d) {
      d3.select(this).style("fill", "steelblue")
    })
  
    // Add x-axis labels to the chart
  svg.append('g')
    .attr('transform', `translate(-40,${height})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '-.8em')
    .attr('dy', '.35em')
    .attr('transform', 'rotate(-65)')
    .style('color', 'red')
  
  // Add y-axis labels to the chart
  svg.append('g')
    .call(d3.axisLeft(y))
    .selectAll('text')
    .style('color', 'red')

    $('.graph').css({
        'font-size': '20px',
        'font-weight': 'italicized',
        'float': 'left'
      });

svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -(height/2))
      .attr("y",-40)
      .style("font-size",'30px')
      .style("text-anchor", "middle")
      .style('color', 'black')
      .text("Percentage")