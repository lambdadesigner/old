$.fullPage = function(option){        
    var defaultOpt = {
        box: "#fullPageBox",    // 滚屏页父元素
        page: ".fullPage",      // 滚屏页面
        index: true,            // 是否显示索引
        duration: 600,          // 动画时间
        direction: "vertical",  // 滚屏方向 horizontal or vertical
        loop: true              // 是否循环
    },
    This = this,
    index = 0,
    over = true;
    this.option = $.extend({}, defaultOpt, option||{});
    this.box = $(this.option.box);
    this.pages = $(this.option.page);
    this.duration = this.option.duration;

    // 绑定鼠标滚轮事件
    $(document).on("mousewheel DOMMouseScroll",function(ev){
        var dir = ev.originalEvent.wheelDelta || -ev.originalEvent.detail;        
        if(over === false)return;
        dir < 0 ? nextPage() : prevPage();
    });

    if(this.option.index){
        initPagination();
    };

    function initPagination(){
        var oUl = $("<ul id='fullPageIndex'></ul>"),
            liStr = "";
        for (var i = 0, len = This.pages.length; i < len; i++) {
            liStr += "<li></li>";
        };
        $(document.body).append( oUl.append($(liStr)) );
        $("#fullPageIndex li").eq(index).addClass("active").siblings().removeClass("active");
    };

    function nextPage(){
        if(index < This.pages.length - 1){
            index++;
        }
        // else{
        //     index = 0;
        // }
        scrollPage(index, This.pages.eq(index).position());
    };

    function prevPage(){
        if(index === 0){
            //index = This.pages.length - 1;
        }else{
            index--;
        }
        scrollPage(index, This.pages.eq(index).position());
    };

    function scrollPage(index, position){
        over = false;
        var cssStr = This.option.direction === "vertical" ? {top: -position.top} : {left: -position.left};
        This.box.animate(cssStr, This.duration, function(){
            over = true;
        })
        $("#fullPageIndex li").eq(index).addClass("active").siblings().removeClass("active");
    };

}