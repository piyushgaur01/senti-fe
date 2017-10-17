function increaseValue() {
    var val = parseInt($('#numQues').val());
    if (val < 10) {
        $('#numQues').val(val + 1);
        $('#quesContainer').append('<div><input type="text" style="width:50%" class="form-control" placeholder="enter sentence / phrase" required="required"/><span></span><br/><div/>');
    }
}
function decreaseValue() {
    var val = parseInt($('#numQues').val());
    if (val > 0) {
        $('#numQues').val(val - 1);
        $('#quesContainer').children().last().remove();
    }
}

function getResponses() {
    console.log('response called');
    var inputElements = $('#quesContainer input');
    var proceed = true;
    if(inputElements.length){
        for (var index = 0; index < inputElements.length; index++) {
            var eleVal = inputElements[index].value;
            if (eleVal === '') {
                proceed = false;
            }
        }
    
        if (proceed) {
            $('#myModal').modal('show');
            var postData = {};
            for (var index = 0; index < inputElements.length; index++) {
                var element = inputElements[index];
                postData['q' + index] = element.value;
            }
            console.log(postData);
            $.post("https://senti-api.herokuapp.com/query", postData, function (data, status) {
                console.log(data);
                $('#myModal').modal('hide');
            });
        }
        else {
            alert('Please enter text in all textboxes.');
        }
    }
    else {
        alert('Please add at least one textbox.');
    }
   

}

$(function () {
    $('#numQues').val(0);
    console.log('document loaded successfully');
    console.log($('#numQues'));
    $('#form').submit(function (e) {
        e.preventDefault();
        // do your staff
    });
});