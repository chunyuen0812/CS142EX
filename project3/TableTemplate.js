function TableTemplate() {
}

TableTemplate.fillIn = function(id,dictionary,columnName=null){
    var elem = document.getElementById(id);
    elem.style.visibility = 'visible';
    var rows = elem.rows;
    var length = rows.length;
    var header = rows[0];
    // console.log(header);
    // console.log(rows);

    for (let row = 1 ; row < length; row++) {
        // console.log(rows[row]);
        if (columnName === "Part Number"){
            selectedElem = rows[row].querySelector('tr > td:first-child');
        }
        else if (columnName === "Length"){
            selectedElem = rows[row].querySelector('tr > td:last-child');
        }
        else{
            selectedElem = rows[row];
        }
        
        header.innerHTML = new Cs142TemplateProcessor(header.innerHTML).fillIn(dictionary);
        selectedElem.innerHTML = new Cs142TemplateProcessor(selectedElem.innerHTML).fillIn(dictionary);
        
    }
    
}