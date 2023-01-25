function createMultiplicationTable(rows, columns) {
    let html = '<table>';

    for (let rowNumber of Array(rows).keys()) {
      html = html + '<tr>';

        for (let columnNumber of Array(columns).keys()) {
          html + `<td>${(rowNumber +1) * (columnNumber +1)}</td>`
        }

      html = html + '</tr>';
   }
      html = html + '<table>';

      return html;
}

function Press() {
    let rowsInput = document.GetElementById('rows-input').value;
    let columnsInput = document.GetElementById('columns-input').value;

    let rows = Number(rowsInput);
    let columns = Number(columnsInput);

    if (!isNaN(rows) && !isNaN(columns)) {
      document.write(tableHTML);
    }
    else {
        alert("Error: Invalid Input!");

    }

    let tableHTML = createMultiplicationTable(rows, columns);

    document.write(tableHTML);
}
}
