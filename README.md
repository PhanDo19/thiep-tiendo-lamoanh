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
│   ├── qr-chure.jpg    # QR chuyển khoản chú rể (VietinBank)
│   ├── qr-codau.jpg    # QR chuyển khoản cô dâu  ⚠ CHƯA CÓ
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

Có **hai** sự kiện. Lễ Thành Hôn giống nhau ở cả hai trang; tiệc mời cỗ khác
giờ và khác địa điểm.

### Lễ Thành Hôn — cả hai trang giống nhau
**Chủ Nhật, 11h00, 20.09.2026** (Tức Ngày 10 Tháng 8 Năm Bính Ngọ)
Gia đình nhà trai — Xóm Trung, Thôn Quang Trung, Xã Tân Minh, Tỉnh Ninh Bình

### Tiệc mời cỗ — khác nhau
**Thứ Bảy, 19.09.2026** (Tức Ngày 9 Tháng 8 Năm Bính Ngọ)

| | Nhà Trai (`index.html`) | Nhà Gái (`nhagai.html`) |
|---|---|---|
| Giờ | 17h00 | 16h00 |
| Địa điểm | Gia đình nhà trai<br>Xóm Trung - Thôn Quang Trung<br>Xã Tân Minh - Tỉnh Ninh Bình | Gia đình nhà gái<br>Thôn Bình Hạ - Xã Phong Doanh<br>Tỉnh Ninh Bình |

> Tấm thiệp đầu trang hiện ngày **lễ chính 20/09**. Cả hai mốc ghi đầy đủ ở
> khối "Xác nhận tham dự" bên dưới.

## ⚠️ Việc còn phải làm

Các mục dưới đây đang để trống, **phải điền trước khi gửi thiệp cho khách**.

### 1. Mã QR cô dâu
Còn thiếu `source/qr-codau.jpg`. Lấy ảnh QR như sau:

1. Mở app ngân hàng của cô dâu
2. Tìm mục **Nhận tiền** / **QR của tôi** / **Mã QR nhận tiền**
3. Lưu ảnh về máy, đổi tên thành `qr-codau.jpg`, copy vào thư mục `source/`
4. Mở **cả hai** file `index.html` và `nhagai.html`, tìm `copy_chi` rồi điền
   số tài khoản vào `data-copy` và sửa chữ trên nút:

```html
<button class="copy copy_chi font_tnr" data-copy="0987654321">
    Sao chép số 0987654321
</button>
```

> Nút để trống `data-copy=""` sẽ tự động mờ đi và không bấm được, nên trang
> không lỗi khi chưa điền — nhưng khách cũng không mừng cưới cô dâu được.

Nếu app không có sẵn ảnh QR, tạo tại [vietqr.io](https://vietqr.io): chọn ngân
hàng, nhập số tài khoản và tên chủ tài khoản, tải ảnh về.

### 2. ~~Link Google Maps~~ ✅ Đã xong

| Nơi | Toạ độ |
|---|---|
| Nhà trai | `20.4243289, 105.9768309` |
| Nhà gái | `20.3812027, 105.9302444` |

Link dùng dạng chỉ đường (`maps/dir/?api=1&destination=...`) nên khách bấm là
Google Maps dẫn đường luôn từ vị trí của họ.

Nút bản đồ có ở 3 chỗ mỗi trang: nút tròn trên thiệp (trỏ nhà trai — nơi tổ
chức Lễ Thành Hôn) và nút "📍 Xem đường đi" trong từng khối sự kiện.

### 3. Số tài khoản
Chú rể đã xong (`0886505360` — VietinBank, PHAN TIEN DO). Cô dâu xem mục 1.

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

## 🌐 Deploy lên GitHub Pages

Website: **https://phando19.github.io/thiep-tiendo-lamoanh/**

| Trang | Link gửi khách |
|---|---|
| Nhà trai | https://phando19.github.io/thiep-tiendo-lamoanh/ |
| Nhà gái | https://phando19.github.io/thiep-tiendo-lamoanh/nhagai.html |

### Bật GitHub Pages (làm 1 lần)

1. Vào repo trên GitHub → tab **Settings**
2. Menu trái → **Pages**
3. Mục **Source** chọn **Deploy from a branch**
4. Branch chọn **main**, thư mục **/ (root)** → **Save**
5. Đợi 1-2 phút, tải lại trang Settings → Pages sẽ hiện link

### Cập nhật nội dung sau này

```bash
git add -A
git commit -m "Cập nhật thông tin"
git push
```

Đợi ~1 phút là trang tự cập nhật. Xem tiến trình ở tab **Actions** của repo.

> Nếu sửa xong mà trang chưa đổi: bấm Ctrl+Shift+R để xoá cache trình duyệt,
> hoặc tăng số `?v=25.0` trong `<head>` của cả hai file.

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
