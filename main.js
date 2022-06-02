// Đề bài số 1 : Tính tiền lương nhân viên
// Lương 1 ngày : 100000
// Cho người dùng nhập vào số ngày làm
// Công thức tính lương : Lương 1 ngày * số ngày làm


// Đầu vào :
// + Lương 1 ngày : b
// + Số ngày làm : n

// Xử lý :
// Tạo biến lương 1 ngày b = 100000
// Tạo biên số ngày làm n = 30 ( cho số ngày làm là 30 ngày )
// Tạo biến tổng lương giá trị là 0

// Tổng lương bằng lương 1 ngày nhân cho số ngày làm .

// Đầu ra : 
// + Tổng lương


// Đầu ra :
var b = 0;
var n = 0;
var tongLuong = 0;

// Xử Lý
var b = 100000;
var n = 30;
var tongLuong = b * n;
console.log("Tổng Lương là " + tongLuong);



// Đề bài số 2 : Tính giá trị trung bình
// Viết chương trình nhập vào 5 số thực.
// Tính giá trị trung bình của 5 số này và xuất ra màn hình .

// Đầu vào :
// + Số thực thứ 1 : a;
// + Số thực thứ 1 : b;
// + Số thực thứ 1 : c;
// + Số thực thứ 1 : d;
// + Số thực thứ 1 : e;

// Xử lý :
// + Tạo biến số thực thứ 1 a = 2
// + Tạo biến số thực thứ 2 b = 4
// + Tạo biến số thực thứ 3 c = 6
// + Tạo biến số thực thứ 4 d = 8
// + Tạo biến số thực thứ 5 e = 10
// + Tạo biến số tổng là Tong
// + Tạo biến số trung bình là trungBinh

// Giá trị trung bình là giá trị tổng 5 số chia cho 5

// Đầu ra :
// Giá trị trung bình


// Đầu ra : 
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var Tong = 0
var trungBinh = 0

// Xử Lý : 
var a = 2;
var b = 4;
var c = 6;
var d = 8;
var e = 10;
var Tong = a + b + c + d + e;
var trungBinh = Tong / 5;
console.log("Trung Binh là " + trungBinh);


// Đề bài số 3 : Giá USD hiện nay là 23500 VND . Viết chương trình quy đổi từ USD sang VND .
// Cho người dùng nhập số tiền USD . Tính và xuất ra số tiền sau quy đổi VND .

// Đầu vào :
// + Giá trị 1 USD : number
// + Số tiền USD nhập vào là x

//  Xử lý :
// +Tạo biến 1 USD là number
// +Tạo biến số tiền nhập vào là x
// +Tạo biến số tiền quy đổi là tienQuyDoi
// + Số tiền quy đổi bằng số tiền VND của 1 USD nhân với số USD . 

// Đầu ra : 
// Số tiền quy đổi

// Đầu ra : 
var number = 0;
var x = 0;
var tienQuyDoi = 0;

// Xử lý :
var number = 23500;
var x = 2;
var tienQuyDoi = number * x;
console.log("Số tiền quy đổi là " + tienQuyDoi);


// Để bài số 4 : Viết chương trình nhập vào 2 chiều dài và chiều rộng của HCN  
// Tính và xuất ra diện tích và chu vi của HCN đó .

// Đầu vào : 
//  Chiều dài là m
//  Chiều rộng là n 

// Xử lý :
// + Tạo một biến chiều dài là m
// + Tạo một biến chiều rộng là n
// + Tạo một biến chu vi là chuVi
// + Tạo một biến diện tích là dienTich
// + Tạo một biến chu vi là chuVi
// + Diện tích bằng chiều dài nhân chiều rộng
// + Chu vi bằng tổng chiều dài và rộng tất cả nhân 2

//  Đầu ra 
//  Diện tích HCN , Chu Vi HCN

// Đầu ra : 
var m = 0;
var n = 0;
var chuVi = 0;
var dienTich = 0;

// Xử lý :
var m = 4;
var n = 3;
var dienTich = m * n;
console.log("Diện tích HCN là " + dienTich);
var chuVi = (m + n) * 2;
console.log("Chu vi HCN là " + chuVi);

// Đề bài số 5 : Viết chương trình nhập vào 1 số có 2 chữ số . Tính tổng 2 kí số vừa nhập .

// Đầu vào :
// Số cần nhập vào là k 

// Xử lý :
// + Tách lấy hàng chục => k/10 => làm tròn số math.floor
//  + Tách lấy hàng đơn vị => n%10  

//  Đầu ra :
// + Tổng

// Đầu vào
var k = 16

// Xử lý :
var hangChuc = Math.floor(k / 10);
var hangDonVi = Math.floor(k % 10);
var tong3KySo = hangChuc + hangDonVi;
console.log("Tổng 3 ký số là " + tong3KySo);