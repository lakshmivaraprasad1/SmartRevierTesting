function getData(id) {
    var data = eval("db.find(" + id + ")"); // Dangerous eval!
    console.log(data)
}
