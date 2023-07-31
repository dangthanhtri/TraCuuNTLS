$(document).ready(function () {
    // FETCHING DATA FROM JSON FILE
    $.getJSON("http://tracuunghiatranglietsihocmon.com/danh-sach-hoc-mon.json",
        function (data) {
            var student = '';

            // ITERATING THROUGH OBJECTS
            $.each(data, function (key, value) {

                //CONSTRUCTION OF ROWS HAVING
                // DATA FROM JSON OBJECT
                student += '<tr>';

                student += '<td>' +
                    value.maso + '</td>';

                student += '<td>' +
                    value.hoten + '</td>';

                student += '<td>' +
                    value.sinhnam + '</td>';

                student += '<td>' +
                    value.nguyenquan + '</td>';

                student += '<td>' +
                    value.chucvu + '</td>';

                student += '<td>' +
                    value.donvi + '</td>';

                student += '<td>' +
                    value.hysinh + '</td>';

                student += '</tr>';
            });

            //INSERTING ROWS INTO TABLE 
            $('#myTable').append(student);
            highlight_row();
        });

    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text()
                .toLowerCase().indexOf(value) > -1)
        });
    });
});

function highlight_row() {
    var table = document.getElementById('myTable');
    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function () {
            // Get the row id where the cell exists
            var rowId = this.parentNode.rowIndex;
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.className += " selected";
            var str = rowSelected.cells[0].innerHTML;
            var Str = str.slice(8, 12);
            var res = Str.toLocaleUpperCase();
            //msg = 'The ID of the company is: ' + rowSelected.cells[0].innerHTML;
            //msg += '\nThe cell value is: ' + this.innerHTML;  
            //alert(msg);
            //console.log(res);
            if (res == "LÔ A") {
                show('img/map/2.PNG', 'img/position/pA.PNG');
            } else if (res == "LÔ B") {
                show('img/map/5.PNG', 'img/position/pB.PNG');
            } else if (res == "LÔ C") {
                show('img/map/4.PNG', 'img/position/pC.PNG');
            } else if (res == "LÔ D") {
                show('img/map/3.PNG', 'img/position/pD.PNG');
            } else {
                show('img/map/1.PNG', '');
            }
            $('#search-to-a').html("Vị trí mộ: " + rowSelected.cells[0].innerHTML);
            $('#search-to-b').html("Đồng chí: " + rowSelected.cells[1].innerHTML);
            $('#search-to-c').html("Năm sinh: " + rowSelected.cells[2].innerHTML);
            $('#search-to-d').html("Nguyên quán: " + rowSelected.cells[3].innerHTML);
            $('#search-to-e').html("Chức vụ: " + rowSelected.cells[4].innerHTML);
            $('#search-to-f').html("Đơn vị: " + rowSelected.cells[5].innerHTML);
            $('#search-to-g').html("Hy sinh: " + rowSelected.cells[6].innerHTML);
            var readPossition = "Hàng " + str.slice(1, 3) + " cột " + str.slice(5, 7) + " Khu " + str.slice(11, 12);
            responsiveVoice.speak(readPossition, 'Vietnamese Female', { rate: 0.75 });
            //console.log(readPossition);
            openMap();
            //document.getElementById("mapScrPic").style.display = "block";
            //$('#ex1').zoom();
        }
    }
}


$(document).ready(function (e) {
    $('img[usemap]').rwdImageMaps();
    $('area').on('focus', function (e) {
        e.preventDefault();
        responsiveVoice.speak($(this).attr('title'), 'Vietnamese Female', { rate: 0.9 });
        //$('.mapScr-right-top p').html($(this).attr('title'));
    });

    $(document).on('click', function (e) {
        e.preventDefault();
        if ($(e.target).closest('area').length === 0) {
            //$('.mapScr-right-top p').html('Chọn một địa điểm trên bản đồ!'); 
            //show('img/map/1.png');
            //document.getElementById("mapScrPic").style.display = "none";
        }
    });
})

function show(filename, filename2) {
    document.getElementById("mapScrPic").style.display = "block";
    jQuery('#maps').attr("src", filename);
    jQuery('#smap').attr("src", filename2);
    $('#ex1').zoom();
};

// INTRO SCREEN

function openIntro() {
    document.getElementById("introScr").style.display = "block";
    document.getElementById("searchScr").style.display = "none";
    document.getElementById("mapScr").style.display = "none";
    document.getElementById("ggmapScr").style.display = "none";
}

function openMap() {
    document.getElementById("introScr").style.display = "none";
    document.getElementById("searchScr").style.display = "none";
    document.getElementById("mapScr").style.display = "block";
    document.getElementById("ggmapScr").style.display = "none";
}

function openSearch() {
    document.getElementById("introScr").style.display = "none";
    document.getElementById("searchScr").style.display = "block";
    document.getElementById("mapScr").style.display = "none";
    document.getElementById("ggmapScr").style.display = "none";
}

function closeSearch() {
    document.getElementById("mapScr").style.display = "block";
    document.getElementById("searchScr").style.display = "none";
}

function openGGMap() {
    document.getElementById("introScr").style.display = "none";
    document.getElementById("searchScr").style.display = "none";
    document.getElementById("mapScr").style.display = "none";
    document.getElementById("ggmapScr").style.display = "block";
}


$("#slideshow > div:gt(0)").hide();
setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);
