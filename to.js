var selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["book"] = document.getElementById("book").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.book;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.qty;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.perPrice;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("book").value = selectedRow.cells[0].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[1].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.book;
    selectedRow.cells[1].innerHTML = formData.qty;
    selectedRow.cells[2].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("book").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}






















