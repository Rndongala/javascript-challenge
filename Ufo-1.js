const tableData = data;
// console.log(tableData);
let tbody = d3.select("tbody");

// YOUR CODE HERE!

function createTable(data) {

    tbody.html("");

    data.forEach((createdata) => {
        // console.log(tableData);

        var datarow = tbody.append("tr");

        Object.values(createdata).forEach(function(value) {
            // console.log(value);

            var cellrow = datarow.append("td");
            cellrow.text(value);
    });

});
}

createTable(tableData);


function runEnter() {
    
//     var input = d3.select("#datetime");
//     var inputValue = input.property("value");
// // return value if matches
// var filterData = data.filter(data => data.datetime === inputValue);
// console.log(filterData)
//createTable(filterData);

//// a different method
const dates = d3.select("#datetime").property("value");
let filteredData =tableData
if (dates){
    //         // Filter the data to match the date provided by the user
 filteredData = filteredData.filter((sightDate => sightDate.datetime === dates));
     // Call the tableBuild function and pass the filtered data with matching date provided by the user
    // createTable(filterData);
console.log(dates)
//  // Prevent the page from refreshing after form submission
//  d3.event.preventDefault();

 // createTable(filteredData);
 console.log(filteredData)
}
 createTable(filteredData)
};

// var button = d3.select("#filter-btn");
// var form = d3.select("form");
d3.selectAll("#filter-btn").on("click", runEnter);

createTable(tableData);
//button.on("click", runEnter);
// form.on("submit",runEnter);