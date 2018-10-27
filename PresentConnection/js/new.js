$(document).ready(function() {
    $('#form_userId').on('input', function() {
        var input=$(this);
        var is_userId=input.val();
        if(is_userId){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    $('#form_id').on('input', function() {
        var input=$(this);
        var is_id=input.val();
        if(is_id){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    $('#form_title').on('input', function() {
        var input=$(this);
        var is_title=input.val();
        if(is_title){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    $('#form_body').on('input', function() {
        var input=$(this);
        var is_body=input.val();
        if(is_body){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
    $("#new_submit button").click(function(event) {
        var form_data=$("#formId").serializeArray();
        var error_free=true;
        for (var input in form_data){
            var element=$("#form_"+form_data[input]['name']);
            var valid=element.hasClass("valid");
            var error_element=$("span", element.parent());
            if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
            else{error_element.removeClass("error_show").addClass("error");}
        }
        if (!error_free){
            event.preventDefault(); 
        }
        else{
            $("#formId").submit(); // Form submission.
            alert("User ID: " + $("#form_userId").val() + "\nID: " + $("#form_id").val() + " \nTitle: " + $("#form_title").val() + "\nBody: " + $("#form_body").val() + "\n\nForm Submitted Successfully!");
        }

    });
});