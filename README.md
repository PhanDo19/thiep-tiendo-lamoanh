# Website Thiệp Cưới - Tiến Độ & Lâm Oanh

Website thiệp mời cưới với hiệu ứng animation và tương tác.

## 📁 Cấu trúc dự án

```
wedding/
├── index.html          # Trang NHÀ TRAI (17h00 - Xóm Trung, Tân Minh)
├── nhagai.html         # Trang NHÀ GÁI (16h00 - Thôn Bình Hạ, Phong Doanh)
├── style.css           # Stylesheet chính
├── style2.css          # Stylesheet bổ sung
├── js.js               # Animation khi cuộn trang
├── invite.js           # Pop-up QR, copy STK, căn đường kẻ thiệp
├── source/             # Assets
│   ├── chure.jpg       # Ảnh chú rể (phần Giới thiệu)
│   ├── codau.jpg       # Ảnh cô dâu (phần Giới thiệu)
│   ├── qr-chure.svg    # QR chuyển khoản chú rể  ⚠ CHƯA THAY
│   ├── qr-codau.svg    # QR chuyển khoản cô dâu  ⚠ CHƯA THAY
│   ├── album/          # 01.jpg → 09.jpg - album ảnh cưới
│   ├── doc/
│   │   ├── back_thiep.jpg   # Nền thiệp (đầu trang)
│   │   ├── nen_cuoi.jpg     # Nền phần "Rất hân hạnh"
│   │   └── thumoi_1..3.jpg  # 3 ảnh phần "Thư mời"
│   ├── _goc/           # Ảnh gốc chưa nén (không đưa lên git)
│   ├── meta.jpg        # Ảnh preview khi share link
│   ├── favicon.png
│   └── music.mp3       # Nhạc nền
└── README.md
```

## 📅 Thông tin sự kiện

**Chủ Nhật, 19.09.2026** (Tức Ngày 9 Tháng 8 Năm Bính Ngọ)

| | Nhà Trai (`index.html`) | Nhà Gái (`nhagai.html`) |
|---|---|---|
| Lễ | Thành Hôn | Vu Quy |
| Giờ | 17h00 | 16h00 |
| Địa điểm | Xóm Trung - Thôn Quang Trung<br>Xã Tân Minh - Tỉnh Ninh Bình | Thôn Bình Hạ - Xã Phong Doanh<br>Tỉnh Ninh Bình |

## ⚠️ Việc còn phải làm

Các mục dưới đây đang để trống, **phải điền trước khi gửi thiệp cho khách**.

### 1. Mã QR chuyển khoản
`source/qr-chure.svg` và `source/qr-codau.svg` **vẫn là QR của cặp đôi cũ** — bắt buộc
phải thay. Tạo QR miễn phí tại [vietqr.io](https://vietqr.io): chọn ngân hàng, nhập số
tài khoản, tải ảnh về. Lưu đè đúng tên trên (có thể dùng `.jpg`/`.png`, nhớ sửa `src`
trong cả hai file HTML).

### 2. Link Google Maps
Trong **cả hai file**, tìm `class="thiep_map"` và thay `href="#"`:

```html
<a class="thiep_map" href="https://maps.app.goo.gl/XXXX" target="_blank" rel="noopener noreferrer">
```

Lấy link: mở Google Maps → tìm địa chỉ → **Chia sẻ** → **Sao chép liên kết**.
Hai file dùng **hai link khác nhau** (nhà trai / nhà gái).

### 3. Số tài khoản
Điền STK vào `data-copy` (ở cả hai file) để nút bấm copy hoạt động:

```html
<div class="copy copy_anh" data-copy="0123456789"></div>
<div class="copy copy_chi" data-copy="9876543210"></div>
```

### 4. Form xác nhận tham dự
Xem hướng dẫn ở mục dưới, rồi thay `href="#"` trong nút **"Xác nhận tham dự"**
(ở cả hai file) bằng link form.

### 5. Domain
Sau khi deploy, điền `og:url` và `og:image` trong `<head>` của cả hai file:

```html
<meta property="og:image" content="https://tenmien-cua-ban.vn/source/meta.jpg" />
<meta property="og:url" content="https://tenmien-cua-ban.vn" />
```

`og:image` **bắt buộc là URL đầy đủ** (`https://...`), đường dẫn tương đối sẽ không
hiện ảnh khi share.

## 📝 Hướng dẫn tạo Form xác nhận tham dự

1. Vào [forms.google.com](https://forms.google.com) → **Trống** (dấu +)
2. Đặt tên: *Xác nhận tham dự Lễ cưới Tiến Độ & Lâm Oanh*
3. Thêm các câu hỏi:

   | Câu hỏi | Loại | Bắt buộc |
   |---|---|---|
   | Họ và tên | Trả lời ngắn | ✅ |
   | Bạn là khách mời của? | Trắc nghiệm: *Nhà trai* / *Nhà gái* | ✅ |
   | Bạn sẽ tham dự chứ? | Trắc nghiệm: *Có, chắc chắn rồi!* / *Rất tiếc, mình bận mất rồi* | ✅ |
   | Số người tham dự | Trả lời ngắn | ❌ |
   | Lời chúc gửi cô dâu chú rể | Đoạn | ❌ |

4. Bấm **Gửi** (góc trên phải) → chọn biểu tượng 🔗 → tick **Rút ngắn URL** → **Sao chép**
5. Dán link vào `href` của nút "Xác nhận tham dự" trong **cả hai file**
6. Xem phản hồi ở tab **Câu trả lời**; bấm biểu tượng Sheets màu xanh để xuất ra
   Google Trang tính cho dễ theo dõi

> Nếu muốn tự động biết khách xem trang nào, có thể tạo **2 form riêng** cho nhà trai
> và nhà gái thay vì dùng câu hỏi "Bạn là khách mời của?".

## 🚀 Chạy thử ở máy

```bash
python -m http.server 8000
```

Mở http://localhost:8000 (nhà trai) và http://localhost:8000/nhagai.html (nhà gái).

> Phải chạy qua server, mở thẳng file bằng trình duyệt sẽ lỗi copy STK.

## 🖼️ Ghi chú về ảnh

Ảnh gốc từ máy ảnh (4000×6000px, ~150 MB) đã được nén xuống **tối đa 1600px, JPG 82%**
— tổng còn ~20 MB, trang tải trong vài giây trên 4G.

Bản gốc lưu ở `source/_goc/` (không đưa lên git). Muốn nén lại ảnh mới:

```bash
ffmpeg -i anh-goc.jpg -vf "scale='if(gt(iw,ih),min(1600,iw),-2)':'if(gt(iw,ih),-2,min(1600,ih))'" -q:v 4 source/album/01.jpg
```

Ảnh album có `loading="lazy"` — chỉ tải khi khách cuộn tới.

> Tên file phân biệt hoa/thường trên server Linux. Luôn dùng đuôi `.jpg` chữ thường.

## 🎨 Công nghệ

HTML5 · CSS3 (animations, transitions) · Vanilla JavaScript ·
Google Fonts (Alex Brush, Montserrat, Noto Serif Display)

## 👤 Tác giả

Website by Nguyen Van Hoang
