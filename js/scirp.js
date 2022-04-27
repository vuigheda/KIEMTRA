< script >
    $(document).ready(function() {
        $('#myModal').on('shown.bs.modal', function() {
            $('#myInput').trigger('focus')
        })

        function checkMaSV() {
            var maSV = $('#maSV').val();
            var reg = /^[1-9]{1}[0-9]{9}$/
            if (reg.test(maSV)) {
                alert("Ban nhap dung ")
            } else
                alert("Ban nhap sai ")
        }
        $('#maSV').blur(checkMaSV)

        function checkHoTen() {
            var hoTen = $('#hoTen').val();
            var reg = /^[A-Z]+[A-Za-z]*(\s*[A-Z][A-Za-z]*)*$/
            if (reg.test(hoTen)) {
                alert("Ban nhap dung ")
            } else
                alert("Ban nhap sai ")
        }
        $('#hoTen').blur(checkHoTen)

        function checkDate() {
            if ($("#ntt").val() == "") {
                $('#tbNtt').html("Khong de trong");
                return false
            }
            var today = new Date();
            var ntt = new Date($('#ntt').val());
            today = today.setDate(today.getDate() + 7);
            if (today > ntt) {
                $('#tbNtt').html("Ngay tap trung phai sau ngay hien tai 7 ngay");
                return false
            }
            $('#tbNtt').html('*')
            return true
        }
        $('#ntt').blur(checkDate)

        function checkMail() {
            reg = /@(iuh.edu.vn)$/
            var email = $('#email').val();
            if (reg.test(email)) {
                alert("Ban nhap dung ")
            } else
                alert("Ban nhap sai ")
        }
        $('#email').blur(checkMail)

        function checkSDT() {
            let re = /^0\d{3}-\d{3}-\d{4}$/
            if ($('#sdt').val() == "") {
                $('#tbSdt').html("Khong de trong");
                return false
            }
            if (!re.test($('#sdt').val())) {
                $('#tbSdt').html("SDT khong dung dinh dang");
                return false
            }
            $('#tbSdt').html('*')
            return true
        }
        $('#sdt').blur(checkSDT)
        $('#btnSubmit').click(function() {
            if (checkDate() && checkHoTen() && checkHoTen() && checkDate() && checkMaSV()) {
                row = "<tr>"
                row += "<th>" + i++ + "</th>"
                row += "<th>" + $("#name").val() + "</th>"
                row += "<th>" + $("#ao").val() + "</th>"
                row += "<th>" + $("#dc").val() + "</th>"
                row += "<th>" + $("#ntt").val() + "</th>"
                row += "<th>" + $("#sdt").val() + "</th>"
                row += "<th>" + $("#avt").val() + "</th>"
                row += "</tr>"
                $('#danhSach').append(row)
            }

        })
    }) <
    /script>