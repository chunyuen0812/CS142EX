function DatePicker(id,callback) {
    this.id = id;
    this.callback = callback;
    this.elem = document.getElementById(id);
    this.fixedDate = {
        month: null,
        day: null,
        year: null
    }
    
}

DatePicker.prototype.createCalender = function(date){
    var table = document.createElement("table")

    var header = this.createCalenderHearder(table, date)

    var daysOfWeek = ["Sun", "Mon","Tues","Wed","Thur","Fri","Sat"];
    var rowWeek = header.insertRow(1)
    for (var i = 0; i < daysOfWeek.length; i++){
        var cell = rowWeek.insertCell(i)
        cell.innerHTML = daysOfWeek[i]
    }

    var firstDay = new Date(date.getFullYear(),date.getMonth(),1);
    var curDate = new Date(firstDay.getTime());
    curDate.setDate(-firstDay.getDay() - 1);
    var rowIndex = 2
    while (true) {
        var row = table.insertRow(rowIndex);
        rowIndex = rowIndex + 1;
        
        for (var i = 0; i < 7; ++ i) {
            var cell = row.insertCell(i);
            cell.innerHTML = curDate.getDate();

            if (curDate.getMonth() === date.getMonth()) {
                cell.setAttribute("id", "CurMonth");
                    let ob = {
                        month: curDate.getMonth() + 1,
                        day: cell.innerHTML,
                        year: curDate.getFullYear()
                    };
                cell.addEventListener("click", () => {
                    this.callback(this.id, ob);
                });
            } else {
                cell.setAttribute("id", "OtherMonth");
            }

            curDate.setDate(curDate.getDate() + 1);
        }

        // exit the loop
        if (curDate.getMonth() != date.getMonth()) {
            break;
        }
    }
    return table
    
}

DatePicker.prototype.createCalenderHearder = function(table, date){
    var header = table.createTHead();
    var headerRow = header.insertRow(0);

    var leftArrow = headerRow.insertCell(0);
    leftArrow.innerHTML = '<';
    leftArrow.setAttribute('id','LeftArrow');

    var monthCell = headerRow.insertCell(1)
    var months = ["January", "February","March", "April","May", "June", "July", "August", "September",
    "October","November","December"];
    monthCell.innerHTML = months[date.getMonth()] + " " + date.getFullYear();
    monthCell.colSpan = "5";

    var rightArrow = headerRow.insertCell(2)
    rightArrow.innerHTML = '>';
    rightArrow.setAttribute('id','RightArrow');

    leftArrow.addEventListener("click", ()=>{
        table.remove();
        date.setMonth(date.getMonth() - 1)
        this.render(date)
    })

    rightArrow.addEventListener("click", ()=>{
        table.remove();
        date.setMonth(date.getMonth() + 1)
        this.render(date)
    })

    return header
}

DatePicker.prototype.render = function(date){
    this.fixedDate.month = date.getMonth() + 1;
    this.fixedDate.day = date.getDate();
    this.fixedDate.year = date.getFullYear();

    this.callback(this.id,this.fixedDate);
    

    this.elem.appendChild(this.createCalender(date))

}
