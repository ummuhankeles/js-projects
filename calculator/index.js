function clickBtn(number) {
    document.getElementById("result").value =
        document.getElementById("result").value + number;
}

function equal() {
    var sum = document.getElementById("result").value;
    if (sum) {
        document.getElementById("result").value = eval(sum);
    }
}

function clearAll() {
    document.getElementById("result").value = "";
}