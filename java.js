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
            }else if (e.className =="project icon"){
                close ("#project") ;
            }else if (e.className =="library icon"){
                close ("#library");
            }else if (e.className =="photo icon"){
                close ("#photo");
            }else {
                alert("ok");
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


})