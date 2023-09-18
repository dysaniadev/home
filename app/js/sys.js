let dataServis = null;
let jumbotronAboutTop = 0;
let jumbotronAboutBottom = -50;
async function init(){
    $.getJSON("assets/data/servicesExp.json", function(json) {
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
            desc.addClass("min-vh-100 d-flex section flex-column");
            let titleContent = $("<h6></h6>");
            titleContent.addClass("text-muted mb-md-4 mb-2");
            titleContent.html($("<b></b>").append($("<i></i>").html(element.title)));
            let tags = $("<nav></nav>");
            tags.addClass("nav mt-md-2 mt-1 mb-3 mb-md-0");
            element.tag.forEach(tag => {
                let contentTag = $("<a></a>");
                contentTag.addClass("nav-link text-muted ps-0 pb-0 pt-0");
                contentTag.html(tag);
                tags.append(contentTag);
            });
            let descContent = $("<h4></h4>");
            descContent.addClass("mb-md-3 mb-1")
            descContent.append($("<b></b>").html(element.desc));
            let imgContent = $("<img>");
            imgContent.addClass("imgServiceExmp mb-5 d-block d-md-none");
            imgContent.attr("alt", "Gambar");
            imgContent.attr("src", 'assets/img/' + element.img);
            let contenContainer = $("<div></div>");
            contenContainer.addClass("my-auto d-flex flex-column");
            contenContainer.append(titleContent, descContent, tags, imgContent);
            desc.append(contenContainer);
            $("#serviceDescList").append(desc);
            i++;
        });
    }).then(function(){
        $.getJSON("assets/data/portofolio.json", function(json) {
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
        }).then(function(){
            $.getJSON("assets/data/services.json", function(json) {
                json.forEach(element => {
                    // Short
                    let ssAnimationDelay = 300;
                    let ssContainer = $("<div></div>");
                    ssContainer.addClass("mb-5");
                    ssContainer.attr("data-aos", "fade-up");
                    ssContainer.attr("data-aos-duration", "1500");
                    ssContainer.attr("data-aos-delay", ssAnimationDelay);
                    ssAnimationDelay += 300;
                    let ssRow = $("<div></div>");
                    ssRow.addClass("row");
                    let ssColIcon = $("<div></div>");
                    ssColIcon.addClass("col-2");
                    ssColIcon.append($("<h1></h1>").append($("<i></i>").addClass(element.faIconClass)));
                    let ssColContent = $("<div></div>");
                    ssColContent.addClass("col-10");
                    let ssDesc = $("<h4></h4>");
                    ssDesc.addClass("mb-0");
                    ssDesc.append($("<b></b>").html(element.title), ". " + element.desc);
                    let ssTagsContainer = $("<div></div>");
                    ssTagsContainer.addClass("mt-2");
                    let ssTags = $("<nav></nav>");
                    ssTags.addClass("nav");
                    element.tag.forEach(tags => {
                        let ssTag = $("<a></a>");
                        ssTag.addClass("nav-link text-muted ps-0 pb-0 pt-0");
                        ssTag.append($("<small></small>").html(tags.titleTag));
                        ssTags.append(ssTag);
                    });
                    ssTagsContainer.append(ssTags);
                    ssColContent.append(ssDesc, ssTagsContainer);
                    ssRow.append(ssColIcon, ssColContent);
                    ssContainer.append(ssRow);
                    $("#listShortService").append(ssContainer);
                    // Full
                    let container = $("<div></div>");
                    container.addClass("mb-5 pb-5");
                    let row1 = $("<div></div>");
                    row1.addClass("row");
                    let col1Row1 = $("<div></div>");
                    col1Row1.addClass("col-md-6");
                    let id = $("<h6></h6>").append(element.id);
                    let title = $("<h1></h1>").append($("<b></b>").html(element.title));
                    col1Row1.append(id, title);
                    let col2Row1 = $("<div></div>");
                    col2Row1.addClass("col-md-6");
                    col2Row1.attr("data-aos", "fade-up");
                    col2Row1.attr("data-aos-duration", "1500");
                    let fullDesc = $("<h5></h5>");
                    fullDesc.addClass("mb-5");
                    fullDesc.html(element.fullDesc);
                    col2Row1.append(fullDesc);
                    row1.append(col1Row1, col2Row1);
                    let row2 = $("<div></div>");
                    row2.addClass("row d-flex");
                    row2.attr("data-aos", "fade-up");
                    row2.attr("data-aos-duration", "1500");
                    row2.attr("data-aos-delay", "200");
                    let col1Row2 = $("<div></div>");
                    col1Row2.addClass("col-lg-6 ms-auto");
                    let col1Row2Tags = $("<div></div>");
                    col1Row2Tags.addClass("row");
                    let i = 1;
                    element.tag.forEach(element => {
                        let col1Row2 = $("<div></div>");
                        col1Row2.addClass("col-md-6 position-relative tagServiceItem d-flex cursor-pointer mb-3 ms-auto");
                        let titleTag = $("<h5></h5>");
                        titleTag.addClass("mb-2");
                        titleTag.append($("<b></b>").html(element.titleTag));
                        let descTag = $("<div></div>").html(element.descTag);
                        let bgImage = $("<img>");
                        bgImage.addClass("position-absolute w-100 h-100");
                        if(1%2 == 0){
                            bgImage.addClass("ps-md-4");
                        } else {
                            bgImage.addClass("pe-md-4");
                        }
                        bgImage.attr("style", "object-fit: cover; z-index: -9; opacity: 0");
                        bgImage.attr("src", "assets/img/projectExmp/" + element.bgImage);
                        let contenContainer = $("<div></div>");
                        contenContainer.addClass("bg-white tagContent");
                        contenContainer.append(titleTag, descTag);
                        col1Row2.append(contenContainer, bgImage);
                        col1Row2Tags.append(col1Row2);
                    });
                    col1Row2.append(col1Row2Tags);
                    row2.append(col1Row2);
                    container.append(row1, row2);
                    $("#sectionDescLayanan").append(container);
                });
                AOS.init();
            });
        });
    });
}
init().then(function(){
    $(document).ready(function(){
        window.onscroll = function(){
            let minOffset = $("#sectionHome").outerHeight() + $("#sectionLayanan").outerHeight() + (window.innerHeight * 0.5);
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
                        for (let index = 1; index <= parseInt(parseInt(pageOffset/window.innerHeight)); index++) {
                            $("#imgServiceList" + index).css({'height': '100%'});            
                        }
                    }
                    $("#imgServiceList" + parseInt(parseInt(pageOffset/window.innerHeight) + 1)).attr("style", "object-fit: cover; height: 0; z-index: " + parseInt(parseInt(pageOffset/window.innerHeight) + 1) + "; height: " + percentage + "%");
                }
            } else if(window.pageYOffset <= minOffset) {
                for (let index = 1; index < dataServis.length; index++) {
                    $("#imgServiceList" + index).css({'height': '0'});            
                }
            }

            if(window.pageYOffset >= window.innerHeight + (window.innerHeight/2)){
                $("#img-service").css({scale:2});
                $("#img-service").removeClass("img-service-animation-reverse");
                $("#img-service").addClass("img-service-animation");
            } else {
                $("#img-service").removeClass("img-service-animation");
                $("#img-service").addClass("img-service-animation-reverse");
            }

            let minOffsetAboutUs = $("#sectionHome").outerHeight() + $("#sectionLayanan").outerHeight() + $("#sectionContentLayananExp").outerHeight() + $("#sectionProject").outerHeight();
            if((window.pageYOffset - minOffsetAboutUs) > 0 && (window.pageYOffset - minOffsetAboutUs) <= window.innerHeight){
                $("#imgAbout").attr("style", "top: " + (((window.pageYOffset - minOffsetAboutUs)/3)* -1) + "px; bottom: 0 !important;");
            } else if((window.pageYOffset - minOffsetAboutUs) <= 0){
                $("#imgAbout").attr("style", "bottom: " + ((window.innerHeight)*-1) + "px; top: 0px");
            }
        }
        $(".section").attr("style", "padding-top: " + parseInt($("#dysaniaNavbar").outerHeight() + 10) + "px");
        $("#sectionBanner").attr("style", "height: " + (Number(window.innerHeight) - Number($("#dysaniaNavbar").outerHeight())) + "px");
        
    });
});