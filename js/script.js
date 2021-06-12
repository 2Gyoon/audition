$(document).ready(function(){


    //sec_02
    var $mov_arr = [
        ["cont_01.png", "죄 많은 소녀 (After My Death, 2019)"],
        ["cont_02.jpeg", "소공녀 (Microhabitat, 2020)"],
        ["cont_03.jpg", "벌새 (House of Hummingbird, 2018)"],
    ];

    var $mov_box = 
    `
        <div class="box">
            <div class="movie_img">
                <a href="#"><img src="./img/play_icon.png" alt="영화"></a>
            </div>
            <h5>죄 많은 소녀 (After My Death, 2019)</h5>
        </div>
    
    `

    for(m=0; m < $mov_arr.length; m++){
        $("#sec_02 .wrap .cont").append($mov_box);
    };

    $("#sec_02 .wrap .cont .box").each(function(index){
        $(this).find(".movie_img").css("background-image", "url(./img/"+$mov_arr[index][0]+")");
        $(this).find("h5").text($mov_arr[index][1]);
        
    });




    //sec_04
    var $act_arr = [
        ["yeobeen.png", "전여빈"],
        ["saebyeok.png", "김새벽"],
        ["sanghee.png", "이상희"],
        ["yeeun.png", "김예은"],
        ["hakju.png", "이학주"],
        ["jungmin.png", "박정민"],
    ];

    var $cont_bx = 
    `
        <div class="box">
            <div class="actor_img">
                <div class="actor_info">
                    <p>전여빈</p>
                    <div class="filmo_btn">
                        <a href="#">필모그래피</a>
                    </div>
                </div>
            </div>
        </div>

    `

    for(i=0; i < $act_arr.length; i++){
        $("#sec_04 .wrap .cont").append($cont_bx);
    };

    $("#sec_04 .cont .box").each(function(index){
        $(this).find(".actor_img").css("background-image", "url(./img/"+$act_arr[index][0]+")");
        $(this).find("p").text($act_arr[index][1]);
    });

    $("#sec_04 .wrap .cont .box").hover(function(){
        var $index = $(this).index();
        console.log($index);
        $("#sec_04 .wrap .cont .box .actor_img:eq("+$index+") .actor_info").addClass("hover");
    }, function(){
        $("#sec_04 .wrap .cont .box .actor_img .actor_info").removeClass("hover");
    });

    //72번째에 74번째랑 똑같이 $index를 사용해서 했을때는 박스가 들어오고나서 다시 나가지 않는데, 
    //똑같은 박스를 선택하고 해제한건데 왜 들어가는건 안될까요?ㅠ 애초에 이렇게 하는건지는 잘 모르겠지만ㅎㅎ











});