// Căn chiều rộng 2 đường kẻ ngang của thiệp theo hàng ngày/giờ
window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.thiep_item');
  const container = document.querySelector('.thiep_date_box');
  if (items.length === 2 && container) {
    const left = items[0].getBoundingClientRect().left;
    const right = items[1].getBoundingClientRect().right;
    const containerLeft = container.getBoundingClientRect().left;
    const width = right - left;

    const hr = document.querySelector('.hr-wrapper');
    hr.style.width = width + 'px';
    hr.style.left = (left - containerLeft) + 'px';
    hr.style.transform = 'none';

    const hr_add = document.querySelector('.hr-add');
    hr_add.style.width = width + 'px';
    hr_add.style.left = (left - containerLeft) + 'px';
    hr_add.style.transform = 'none';
  }
});

// Pop-up QR gửi quà mừng
const btn_qr = document.querySelector('.js_qr');
const pop_up = document.querySelector('.popup');
const pop_up_item1 = document.querySelector('.popup_item1');
const pop_up_item2 = document.querySelector('.popup_item2');

function show_pop_up() {
  pop_up.classList.add('show');
}

function hide_pop_up() {
  pop_up.classList.remove('show');
}

btn_qr.addEventListener('click', show_pop_up);
pop_up.addEventListener('click', hide_pop_up);
pop_up_item1.addEventListener('click', function (event) {
  event.stopPropagation();
});
pop_up_item2.addEventListener('click', function (event) {
  event.stopPropagation();
});

// Thẻ nào đang ở giữa thì rõ nét, thẻ bên cạnh mờ và nhỏ lại
const items = document.querySelectorAll('.popup_item');
const dots = document.querySelectorAll('.popup_dot');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const ratio = entry.intersectionRatio; // 0 -> 1
    const value = 0.8 + 0.2 * ratio;
    entry.target.style.opacity = value.toFixed(2);
    entry.target.style.transform = `scale(${value.toFixed(2)})`;

    // Chấm chỉ báo chạy theo thẻ đang xem
    if (ratio > 0.6) {
      const index = Array.prototype.indexOf.call(items, entry.target);
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }
  });
}, {
  root: document.querySelector('.popup_container'),
  threshold: Array.from({ length: 101 }, (_, i) => i / 100)
});

items.forEach(item => observer.observe(item));

// Mở pop-up thì luôn bắt đầu từ thẻ đầu tiên
btn_qr.addEventListener('click', () => {
  const container = document.querySelector('.popup_container');
  if (container) container.scrollLeft = 0;
});

// Copy số tài khoản
function showToast() {
  const toast = document.getElementById('copy-toast');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 1000);
}

document.querySelectorAll('.copy').forEach(copyBtn => {
  copyBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // bấm nút không làm đóng pop-up
    const text = this.dataset.copy;
    if (!text) return;       // chưa điền số tài khoản thì bỏ qua

    navigator.clipboard.writeText(text).then(showToast).catch(() => {
      // Trình duyệt cũ hoặc trang mở qua file:// thì dùng cách dự phòng
      const tmp = document.createElement('textarea');
      tmp.value = text;
      tmp.setAttribute('readonly', '');
      tmp.style.position = 'fixed';
      tmp.style.opacity = '0';
      document.body.appendChild(tmp);
      tmp.select();
      try {
        document.execCommand('copy');
        showToast();
      } catch (err) {
        console.error('Copy thất bại: ', err);
      }
      document.body.removeChild(tmp);
    });
  });
});
