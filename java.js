document.addEventListener('DOMContentLoaded',function(){
    var anh = document.querySelectorAll('.picture') ;
    anh.forEach(function(e){
        e.addEventListener('click',function(){
            alert(" Ảnh đẹp ha chị Yến ha :)))") ;
        })
    })

    var celebrate = document.querySelectorAll('.Celebrate');

    celebrate.forEach(function(e) {
        e.addEventListener('click', function() {
            var pics = e.querySelectorAll('.pic'); // Lấy tất cả các phần tử có class 'pic' bên trong phần tử .Celebrate hiện tại
            
            pics.forEach(function(pic) { 
                // Hiển thị ảnh nếu nó đang bị ẩn
                if (pic.style.display === 'none' || pic.style.display === '') {
                    pic.style.display = 'block';
                }
                else{
                    pic.style.display = 'none';
                }
                // Gán sự kiện click cho hình ảnh để chặn sự kiện từ div bao phủ
                pic.addEventListener('click', function(event) {
                    event.stopPropagation(); // Ngăn sự kiện click lan tới phần tử cha
                });
            });
        });
    });
    
    // Đặt sự kiện cho nút .thunho bên ngoài vòng lặp
   
// ----------------------------------------------------
    var selectIcon = document.querySelectorAll('.icon')

    selectIcon.forEach(function(e){
        e.addEventListener('click' , function(){
            
            if(e.className =="iconhome icon") {
                close("#home") ;
            }else if(e.className =="about icon"){
                close("#about") ;
            }else if (e.className =="library icon"){
                close ("#library");
            }else if (e.className =="photo icon"){
                close ("#photo");
            }else if (e.className =="facebook icon"){
                window.location.href ="https://www.facebook.com/chuixx.cuixx"
            }else if (e.className =="instagram icon"){
                window.location.href ="https://www.instagram.com/yenhuynhhh289/"
            }else if (e.className =="tiktok icon"){
                window.location.href ="https://www.tiktok.com/@yenhuynh134"
            }
            
            else {
                alert("Mấy phần này vội quá làm chưa tới chị Yến ơi  :D");
            }
        })
    })

    function close(element){
        var pages  = document.querySelectorAll('.page');
        var page = document.querySelector(element)
        pages.forEach(function(e){
            e.style.display = "none" ;
        })
        page.style.display = "block";
    }


    const video = document.querySelector('#snvv');
    video.style.display = 'none';
    video.pause();
    video.currentTime = 0; 
    setTimeout(function(){
        video.style.display = 'block';
        video.play();
    },3000)

    setTimeout(function(){
        video.style.display = 'none';
    },8500)

})