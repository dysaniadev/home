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
        desc.addClass("min-vh-100 d-flex");
        let descContent = $("<div></div>");
        descContent.addClass("my-auto")
        descContent.html(element.desc);
        desc.append(descContent);
        $("#serviceDescList").append(desc);
        i++;
    });
});
$.getJSON("http://localhost/company-profile/assets/data/portofolio.json", function(json) {
    json.forEach(element => {
        let container = $("<div></div>");
        container.addClass("col-md-6 d-flex align-items-stretch mb-3");
        container.attr("data-aos", "fade-up");
        container.attr("data-aos-duration", "1500");
        let card = $("<div></div>");
        card.addClass("mx-auto card-portofolio py-3");
        card.attr("style", "width: 70%; background: " + element.bg);
        let containerImg = $("<div></div>");
        containerImg.addClass("position-relative overflow-hidden");
        containerImg.attr("style", "height: 500px;");
        containerImg.addClass("w-100")
        let img = $("<img>");
        img.attr("src", "assets/img/" + element.img);
        img.attr("style", "object-fit: cover; top: 0; left: 0");
        img.addClass("w-100 h-100 img-portofolio position-absolute");
        containerImg.append(img);
        let title = $("<h2></h2>");
        title.html(element.title);
        title.attr("style", "color: " + element.foreground);
        title.addClass("text-start my-3 px-3");
        card.append(containerImg, title);
        container.append(card);
        $("#rowPortofolio").append(container);
    });
});
$(document).ready(function(){
    window.onscroll = function(){
        let minOffset = $("#sectionBanner").outerHeight() + $("#sectionLayanan").outerHeight();
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
    $(".section").attr("style", "padding-top: " + parseInt($("#dysaniaNavbar").outerHeight() + 10) + "px");
});