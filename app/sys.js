let dataServis = null;
$.getJSON("http://localhost/company-profile/assets/data/services.json", function(json) {
    dataServis = json;
    let i = 1;
    json.forEach(element => {
        let img = $("<img>");
        img.attr("alt", "Service " + element.id);
        img.attr("src", "assets/img/" + element.img);
        img.attr("id", "imgServiceList" + parseInt(Number(i)-1));
        if(i > 1){
            img.attr("style", "object-fit: cover; height: 0; z-index: " + i);
            img.addClass("w-100 position-absolute");
        } else {
            img.attr("style", "object-fit: cover; z-index: " + i);
            img.addClass("w-100 h-100 position-absolute");
        }
        $("#serviceImgContainer").append(img);
        let desc = $("<div></div>");
        desc.addClass("min-vh-100");
        desc.html(element.desc);
        $("#serviceDescList").append(desc);
        i++;
    });
});
window.onscroll = function(){
    let minOffset = $("#sectionBanner").outerHeight() + $("#sectionHome").outerHeight();
    let pageOffset = window.pageYOffset - minOffset;
    if(pageOffset > 0 && (pageOffset/window.innerHeight) < dataServis.length){
        if(parseInt(pageOffset/window.innerHeight) >= 0){
            let h = window.pageYOffset - (minOffset + (window.innerHeight * (parseInt(pageOffset/window.innerHeight) - 1)));
            let percentage = h/window.innerHeight*100;
            if(percentage > 100){
                percentage = percentage - 100;
            }
            if(percentage > 95){
                percentage = 100;
            }
            $("#imgServiceList" + parseInt(parseInt(pageOffset/window.innerHeight) + 1)).attr("style", "object-fit: cover; height: 0; z-index: " + parseInt(parseInt(pageOffset/window.innerHeight) + 1) + "; height: " + percentage + "%");
        }
    } else if(window.pageYOffset <= minOffset) {
        for (let index = 1; index < dataServis.length; index++) {
            $("#imgServiceList" + index).css({'height': '0'});            
        }
    }
}