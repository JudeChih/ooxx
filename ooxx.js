$(document).ready(function(){
    var icon = "X";
    $(".grid").on("click",function(){
        var x; var y; var a; var b; var c; var d; var e; var f; var g; var h; var i;
       
        // 交替變換X和O
        y = $(this).html();
        if(y == ""){
            $(this).html(icon);
            x = $(this).html();
            if(x == "X" ){
                icon = "O";
            }
            else if(x == "O"){
                icon = "X";
            }
        }
        
        a = $(".ul").html();     // 將左上角的值設定給a
        b = $(".up").html();     // 將正上方的值設定給b
        c = $(".ur").html();     // 將右上角的值設定給c
        d = $(".left").html();   // 將正左邊的值設定給d
        e = $(".center").html(); // 將中間的值設定給e
        f = $(".right").html();  // 將正右邊的值設定給f
        g = $(".ll").html();     // 將左下角的值設定給g
        h = $(".down").html();   // 將正下方的值設定給h
        i = $(".lr").html();     // 將右下角的值設定給i
        
        // 對上豎線做判斷是否達到獲勝標準
        if(a != "" && b != "" && c != ""){
            if(a == b && b == c  ){
                $(".ul").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                $(".up").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                $(".ur").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                alert("遊戲結束，"+a+"方獲勝");  // 顯示獲勝方
                location.reload();  // 刷新頁面
            }
        }
        // 對中豎線做判斷是否達到獲勝標準
        if(d != "" && e != "" && f != ""){
                if(d == e && e == f  ){
                    $(".left").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".center").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".right").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    alert("遊戲結束，"+d+"方獲勝");  // 顯示獲勝方
                    location.reload();  // 刷新頁面
                }
        }
        // 對下豎線做判斷是否達到獲勝標準
        if(g != "" && h != "" && i != ""){
                if(g == h && h == i ){
                    $(".ll").css("background-color","green");   // 更改背景顏色為綠色表示獲勝   
                    $(".down").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".lr").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    alert("遊戲結束，"+g+"方獲勝");  // 顯示獲勝方
                    location.reload();  // 刷新頁面
                }
        }
        // 對aei斜線做判斷是否達到獲勝標準
        if(a != "" && e != "" && i != ""){
                if(a == e && e == i  ){
                    $(".ul").css("background-color","green");   // 更改背景顏色為綠色表示獲勝  
                    $(".center").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".lr").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    alert("遊戲結束，"+a+"方獲勝");  // 顯示獲勝方
                    location.reload();  // 刷新頁面
                }
        }
        // 對ceg斜線做判斷是否達到獲勝標準
        if(c != "" && e != "" && g != ""){
                if(c == e && e == g  ){
                    $(".ur").css("background-color","green");   // 更改背景顏色為綠色表示獲勝   
                    $(".center").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".ll").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    alert("遊戲結束，"+c+"方獲勝");  // 顯示獲勝方
                    location.reload();  // 刷新頁面
                }
        }
        // 對左橫線做判斷是否達到獲勝標準
        if(a != "" && d != "" && g != ""){
                if(a == d && d == g  ){
                    $(".ul").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".left").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".ll").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    alert("遊戲結束，"+a+"方獲勝");  // 顯示獲勝方
                    location.reload();  // 刷新頁面
                }
        }
        // 對中橫線做判斷是否達到獲勝標準
        if(b != "" && e != "" && h != ""){
                if(b == e && e == h  ){
                    $(".up").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".center").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".down").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    alert("遊戲結束，"+b+"方獲勝");  // 顯示獲勝方
                    location.reload();  // 刷新頁面
                }
        }
        // 對右橫線做判斷是否達到獲勝標準
        if(c != "" && f != "" && i != ""){
                if(c == f && f == i  ){
                    $(".ur").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".right").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    $(".lr").css("background-color","green");   // 更改背景顏色為綠色表示獲勝
                    alert("遊戲結束，"+c+"方獲勝");  // 顯示獲勝方
                    location.reload();  // 刷新頁面
                }
        }
        if(a != "" && b != "" && c != "" && d != "" && e != "" && f != "" && g != "" && h != "" && i != ""){
            $(".grid").css("background-color","red");
            alert("遊戲結束，雙方平手"); 
            location.reload();
        }

    });  
});



