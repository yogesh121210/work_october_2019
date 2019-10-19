 function deleteRow(currObj) {

    // var rowIndex = currObj.closest("tr").rowIndex;
    //document.getElementById("myTable").deleteRow(rowIndex);
    var currentRow = currObj.closest("tr");
    currentRow.remove();
} 

function deleteAll() {
    var tableElement = document.getElementById("myTable");
    console.log(tableElement);
var lenght = tableElement.rows.length;}


for (var i=lenght-1; i >= 0; i--)
{
    //document.innerHTML(i + allRows[i] + "<br>");
	tableElement.deleteRow(i);
	
}
 
