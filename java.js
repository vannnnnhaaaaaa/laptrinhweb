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
    var buttonThunho = document.querySelector('.thunho');
    buttonThunho.addEventListener('click', function() {
        var pics = document.querySelectorAll('.pic');
       
        pics.forEach(function(pic) {
            pic.style.display = 'none';
        });
    });

// Lấy modal và hình ảnh trong modal
var modal = document.getElementById('yModal');
var modalImg = document.getElementById('imgInModal');
var closeBtn = document.querySelector('.close'); // Nút đóng modal

// Lấy tất cả ảnh trong gallery
var pics = document.querySelectorAll('.pic');

// Khi người dùng click vào một ảnh, mở modal với ảnh gốc
pics.forEach(function(pic) {
    pic.addEventListener('click', function() {
        modal.style.display = "flex"; // Hiển thị modal
        modalImg.src = pic.src; // Đặt src của ảnh trong modal là src của ảnh đã nhấn
    });
});

// Khi người dùng click vào nút 'x' để đóng modal
closeBtn.addEventListener('click', function() {
    modal.style.display = "none"; // Đóng modal
});

// Khi người dùng click ra ngoài hình ảnh, modal sẽ đóng
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

})