
var select1;
var content;
var btCommit;

var select2;
var tableShow;
var tableName;
var nowTable;
var tablesNum;
var columnsNumbers_content;
var attr = new Array();
var tables = new Array();

window.onload = function () {



    select1 = document.getElementById("select1");

    content = document.getElementById("content");
    btCommit = document.getElementById("commit");
    select2 = document.getElementById("select2");
    tableShow = document.getElementById("table")
    btCommit.style.display = "none";
    btCommit.onclick = function () {
        commit();
}

}
function commit() {

    if (select1.value == "CREATE TABLE") {
        for(let i =1; i<=parseInt(columnsNumbers_content.value); i++)
        {
            if(attr[i].value=="")return ;
        }

        tablesNum = tables.length;
        tables[tablesNum] = document.createElement("table");
        tables[tablesNum].data_name = tableName.value;
        tables[tablesNum].data_columnsNumbers = parseInt(columnsNumbers_content.value);
        let ths = tables[tablesNum].insertRow(0);
        for(let i =1; i<=parseInt(columnsNumbers_content.value); i++){
            let title = document.createElement("th");
            title.appendChild(document.createTextNode(attr[i].value));
            ths.appendChild(title);
        }
        tableShow.appendChild(tables[tablesNum]);
        let op = document.createElement("option");
        op.value = tableName.value;
        op.appendChild(document.createTextNode(tableName.value));
        select2.appendChild(op);
        op.selected = true;
        nowTable = tables[tablesNum];
        tableShow.innerHTML = "";
        tableShow.appendChild(nowTable);
    }
    if (select1.value == "ADD ROW") {
        let tr = nowTable.insertRow(nowTable.rows.length);
        for (let i=1; i<=nowTable.data_columnsNumbers; i++)
        {
            td = tr.insertCell(i-1);
            td.appendChild(document.createTextNode(attr[i].value));
            td.date_text = document.createTextNode(attr[i].value);
        }
    }
    if (select1.value == "DELETE ROW") {
        for (let i=nowTable.rows.length-1;i>=1;i--)
        {
            let flag = true;
            for( let j=0;j<nowTable.rows[i].cells.length;j++)
            {

                if (attr[j+1].value=="") continue;

                if (attr[j+1].value!=nowTable.rows[i].cells[j].textContent) flag=false;
            }

            if (flag) nowTable.deleteRow(i);

        }
    }
    if (select1.value == "DELETE TABLE") {
        if (select2.value=="SELECT(default: last created)") return;
        let index = select2.selectedIndex;
        select2.options.remove(index);
        tables.splice(index-1,1);
        tableShow.innerHTML="";
        if (select2 .options.length>1){

            select2.children[1].selected=true;
            nowTable = tables[0];
            tableShow.appendChild(nowTable);
        }
        else {
            select2.children[0].selected=true;
        }
    }
}

function selection1() {
    btCommit.style.display = "inline";
    content.innerHTML = "";
    if (select1.value =="SELECT ONE"){
        btCommit.style.display = "none";

    }
    if (select1.value == "CREATE TABLE") {
        btCommit.style.display = "none";
        tableName = document.createElement("input");
        tableName.placeholder = "Table Name";
        tableName.type = "text";

        columnsNumbers_content = document.createElement("input");
        columnsNumbers_content.placeholder = "Columns Names";
        columnsNumbers_content.type = "text";
        content.appendChild(tableName);
        content.appendChild(columnsNumbers_content);
        let br = document.createElement("br");
        content.appendChild(br);

        columnsNumbers_content.onchange = function () {

            createTable(parseInt(columnsNumbers_content.value))
        }
        tableName.onchange = function () {
            createTable(parseInt(columnsNumbers_content.value))
        }
    }
if (select1.value == "ADD ROW") {
        if(select2.value == "SELECT(default: last created)") return;
        addRow(nowTable);
}
if (select1.value == "DELETE ROW") {

    if(select2.value == "SELECT(default: last created)") return;
    deleteRow(nowTable);
}
if (select1.value == "DELETE TABLE") {
    content.innerHTML = "<lable style='color:red;font-size:10px'>WARNING:You cannot undo this action!.</lable>";
}
}

function selection2(){

    tableShow.innerHTML ="";

    if(select2.value == "SELECT(default: last created)") return;
    let index = select2.selectedIndex-1;

    nowTable = tables[index];
    selection1();
    tableShow.appendChild(nowTable);
}

function createTable(columnsNumbers) {


    for (let i = 1; i <= attr.length-1; i++) {
        if (content == attr[i].parentNode)
            content.removeChild(attr[i]);
    }

    if (tableName.value == "" || columnsNumbers_content.value == "") {
        if (btCommit.style.display == "inline")
            btCommit.style.display = "none";
        return;
    }

    attr = new Array();
    btCommit.style.display ="inline";
;
    for (let i = 1; i <= columnsNumbers; i++) {
        attr[i] = document.createElement("input");
        attr[i].placeholder = "Attribute";
        attr[i].type = "text";
        content.appendChild(attr[i])
    }

}
function deleteRow(table) {
    attr = new Array();
    for (let i = 1; i <= table.data_columnsNumbers; i++) {
        attr[i] = document.createElement("input")
        attr[i].placeholder = table.rows[0].cells[i - 1].textContent;
        attr[i].type = "text";
        content.appendChild(attr[i]);

    }

}
function addRow(table) {
    attr = new Array();

    for (let i = 1; i <= table.data_columnsNumbers; i++) {
        attr[i] = document.createElement("input")

        attr[i].placeholder = table.rows[0].cells[i - 1].textContent;
        attr[i].type = "text";
        content.appendChild(attr[i]);

    }


}
