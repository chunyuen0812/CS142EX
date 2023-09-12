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

DatePicker.prototype.render = function(date){
    this.fixedDate.month = date.getMonth() + 1;
    this.fixedDate.day = date.getDate();
    this.fixedDate.year = date.getFullYear();

    this.callback(this.id,this.fixedDate);
    
    this.elem.innerHTML =`
    <div>test</div>
    `;

}
