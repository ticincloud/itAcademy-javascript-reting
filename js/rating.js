
$(document).ready(function() {
    $(".star-rating").on('mouseover', function(){mostrarSelec($(this));});
    $(".star-rating").on('mouseout', function(){amagarSelec($(this));});
    $(".star-rating").on('click', function(){marcarSelec($(this));});
    $(document).on("click",function(e){reset(e);});
});

function reset(e){
    var star = $(".star-rating");

    if (!star.is(e.target) && star.has(e.target).length === 0) {
        $(".star-rating").each(function(){
            $(this).removeClass('star-ratinghover');
            $(this).attr('seleccionat','0');
        });
    }
}

function mostrarSelec(e){
    var pos = e.attr('position');

    $(".star-rating").each(function(){
        if ($(this).attr('position')<=pos){
            $(this).addClass('star-ratinghover');
        }else {
            if ($(this).attr('seleccionat')===0 ){
                $(this).removeClass('star-ratinghover');
            }
        }
   	});
}

function amagarSelec(e){
    $(".star-rating").each(function(){
        if ($(this).attr('seleccionat')==0){
            $(this).removeClass('star-ratinghover');
        }
   	});
}

function marcarSelec(e){
    var pos = e.attr('position');

    $(".star-rating").each(function(){
        if ($(this).attr('position')<=pos){
            $(this).addClass('star-ratinghover');
            $(this).attr('seleccionat',1);
        }else {
            $(this).removeClass('star-ratinghover');
            $(this).attr('seleccionat',0);
        }
   	});
}
