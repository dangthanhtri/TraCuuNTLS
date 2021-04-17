$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE
    $.getJSON("https://harrisstudio.gq/testjsonfile/danh-sach-hoc-mon.json", 
            function (data) {
        var student = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            student += '<td>' + 
                value.so-mo + '</td>';

            student += '<td>' + 
                value.ma-so + '</td>';
    
            student += '<td>' + 
                value.lo + '</td>';

            student += '<td>' + 
                value.ho-ten + '</td>';
            
            student += '<td>' + 
                value.sinh-nam + '</td>';
            
            student += '<td>' + 
                value.nguyen-quan + '</td>';
          
            student += '<td>' + 
                value.cap-bac + '</td>';
            
            student += '<td>' + 
                value.chuc-vu + '</td>';

            student += '<td>' + 
                value.don-vi + '</td>';
            
            student += '<td>' + 
                value.hy-sinh + '</td>';

            student += '</tr>';
        });
          
        //INSERTING ROWS INTO TABLE 
        $('#myTable').append(student);
  highlight_row();
    });

$("#myInput").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#myTable tr").filter(function() {
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

        msg = 'The ID of the company is: ' + rowSelected.cells[0].innerHTML;
        msg += '\nThe cell value is: ' + this.innerHTML;  
        //alert(msg);
        console.log(msg);

        $('#search-to-a').html(rowSelected.cells[0].innerHTML);
        $('#search-to-b').html(rowSelected.cells[1].innerHTML); 
        $('#search-to-c').html(rowSelected.cells[2].innerHTML); 
        $('#search-to-d').html(rowSelected.cells[3].innerHTML); 
        
        openMap();
    }
}
}


$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
    $('area').on('focus', function(e) {
      e.preventDefault();
      $('.mapScr-right-top p').html($(this).attr('title'));   
    });
  
    $(document).on('click', function(e) {
      e.preventDefault();
      if ( $(e.target).closest('area').length === 0 ) {
        $('.mapScr-right-top p').html('Chọn một địa điểm trên bản đồ!'); 
      }  
    });
    
  });

// INTRO SCREEN

function openIntro() {
    document.getElementById("introScr").style.display = "block";
    document.getElementById("searchScr").style.display = "none";
    document.getElementById("mapScr").style.display = "none";
}

function openMap() {
    document.getElementById("introScr").style.display = "none";
    document.getElementById("searchScr").style.display = "none";
    document.getElementById("mapScr").style.display = "block";
}

function openSearch() {
    document.getElementById("introScr").style.display = "none";
    document.getElementById("searchScr").style.display = "block";
    document.getElementById("mapScr").style.display = "none";
}
  
function closeSearch() {
    document.getElementById("mapScr").style.display = "block";
    document.getElementById("searchScr").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();
setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);
