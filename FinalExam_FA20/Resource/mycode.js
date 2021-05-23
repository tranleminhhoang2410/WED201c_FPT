function validate(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var content = document.getElementById('content');
    var campus = document.getElementById('campus');
    var campusChoice = campus.options[campus.selectedIndex].value;

    if(name.value != '' && email.value != '' && content.value != ''){
        var winFeatures="location=yes, width=300, height=300, status=yes, scrollbar=yes";
        var win=window.open("", "_blank", winFeatures);
        win.document.body.innerHTML =
        `<h1>Vui lòng xem lại</h1>
        tên của bạn: ${name.value}<br>
        email của bạn: ${email.value}<br>
        nội dung: ${content.value}<br>
        đơn vị đào tạo bạn chọn: ${campusChoice}`
    }else{
        if (name.value == '' && email.value == '' && content.value == '') {
            alert("Đừng để trống: tên email nội dung")
        } else {
            if (name.value == '') {
                alert("Đừng để trống: tên")
            }
            if (email.value == '') {
                alert("Đừng để trống: email")
            }
            if (content.value == '') {
                alert("Đừng để trống: nội dung")
            }
        }
    }
}