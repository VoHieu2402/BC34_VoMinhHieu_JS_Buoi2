// Task 1
document.getElementById("calculateSalary").onclick = function() {
    var dailySalary = document.getElementById("dailySalary").value;
    var workingDays = document.getElementById("workingDays").value;
    var totalSalary = dailySalary * workingDays;
    
    // add the title
    var title = document.createElement("h2");
    title.innerHTML = "TOTAL SALARY"
    document.getElementById("notiSalary").appendChild(title);

    // add the tip amount to the div noti
    var tagSalary = document.createElement("h3");
    tagSalary.innerHTML = totalSalary;
    document.getElementById("notiSalary").appendChild(tagSalary);
}

// Task 2
document.getElementById("calculateAverage").onclick = function() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var number3 = parseFloat(document.getElementById("number3").value);
    var number4 = parseFloat(document.getElementById("number4").value);
    var number5 = parseFloat(document.getElementById("number5").value);
    var averages = (number1 + number2 + number3 + number4 + number5) / 5;
    // add the title
    var title = document.createElement("h2");
    title.innerHTML = "AVERAGE"
    document.getElementById("notiAvg").appendChild(title);

    // add the tip amount to the div noti
    var tagAvg = document.createElement("h3");
    tagAvg.innerHTML = averages.toString();
    document.getElementById("notiAvg").appendChild(tagAvg);
}

// Task 3
document.getElementById("convertCurrency").onclick = function() {
    var usd = parseFloat(document.getElementById("usd").value);
    var vnd = usd * 23500;

    // format VND
    var formatVND = new Intl.NumberFormat("vn-VN");
    var vndFormatted = formatVND.format(vnd);
    
    // add the title
    var title = document.createElement("h2");
    title.innerHTML = "VND"
    document.getElementById("notiConvert").appendChild(title);

    // add VND to the div noti
    var tagVND = document.createElement("h3");
    tagVND.innerHTML = vndFormatted;
    document.getElementById("notiConvert").appendChild(tagVND);
}

// Task 4
document.getElementById("calculateRec").onclick = function() {
    var widthRec = parseFloat(document.getElementById("width-rec").value);
    var heightRec = parseFloat(document.getElementById("height-rec").value);
    var areaRec = widthRec * heightRec;
    var perimeterRec = (widthRec + heightRec) * 2;
    
    // add the title
    var title = document.createElement("h2");
    title.innerHTML = "Result"
    document.getElementById("notiRec").appendChild(title);

    // show the area
    var tagArea = document.createElement("h3");
    tagArea.innerHTML = "Diện tích: " + areaRec.toString();
    document.getElementById("notiRec").appendChild(tagArea);

    // show the perimeter
    var tagPerimeter = document.createElement("h3");
    tagPerimeter.innerHTML = "Chu vi: " + perimeterRec.toString();
    document.getElementById("notiRec").appendChild(tagPerimeter);
}

// Task 5
document.getElementById("calculateNumLetter").onclick = function() {
    var num = parseInt(document.getElementById("numTask5").value);
    var unitNumLetter = num % 10;
    var secondNumLetter = (num - unitNumLetter) / 10;
    var total = unitNumLetter + secondNumLetter;
    
    // add the title
    var title = document.createElement("h2");
    title.innerHTML = "Tổng các ký số"
    document.getElementById("notiTask5").appendChild(title);

    // add VND to the div noti
    var tagTotal = document.createElement("h3");
    tagTotal.innerHTML = total;
    document.getElementById("notiTask5").appendChild(tagTotal);
}