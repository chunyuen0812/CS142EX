function fixedDate(){
    this.month = null;
    this.day = null;
    this.year = null;
}

function DatePicker(id,callback) {
    this.id = id;
    this.callback = callback;
    this.elem = document.getElementById(id);
    this.fixedDate = new fixedDate();
    
}

DatePicker.prototype.render = function(date){
    this.fixedDate.month = date.getMonth() + 1;
    this.fixedDate.day = date.getDate();
    this.fixedDate.year = date.getFullYear();

    this.elem.innerHTML =`
    <div>test</div>
    `;

    this.callback.call(this,this.id,this.fixedDate);
}
