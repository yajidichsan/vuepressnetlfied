//Show hide projects portfolio
$(document).ready(function(){
    
    $("#mekanikal").hide();
    $("#elektrikal").hide();
    $("#lainnya").hide();
    $("#dataperusahaan").hide();
    $("#showmekanikal").click(function(){
        $("#mekanikal").toggle(500);
    });
    $("#showelektrikal").click(function(){
        $("#elektrikal").toggle(500);
    });
    $("#showlainnya").click(function(){
        $("#lainnya").toggle(500);
    });
    $("#showdataperusahaan").click(function(){
        $("#dataperusahaan").toggle(500);
    });
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
});