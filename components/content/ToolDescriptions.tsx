import React from 'react';

// Helper for internal links to prevent full page reload (handled in App.tsx)
const Link = ({ href, children }: { href: string; children?: React.ReactNode }) => (
  <a href={href} className="text-blue-600 hover:underline font-medium cursor-pointer" data-internal-link>
    {children}
  </a>
);

export const getToolDetails = (id: string, title: string): React.ReactNode => {
  switch (id) {
    // --- NHÓM TÍNH PHẦN TRĂM ---
    case 'percentage':
      return (
        <>
          <h2>Công cụ tính phần trăm là gì?</h2>
          <p>
            Phần trăm (kí hiệu %) là một cách biểu diễn một số dưới dạng phân số của 100. Công cụ này giúp bạn thực hiện các phép tính phần trăm cơ bản mà chúng ta thường gặp hàng ngày như tính tiền giảm giá, tính thuế, hoặc tính tiền boa.
          </p>
          <h3>Công thức tính</h3>
          <p>Để tìm giá trị của X% từ tổng số Y, ta dùng công thức:</p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-center my-4">
            Giá trị = (Phần trăm ÷ 100) × Tổng số
          </div>
          <h3>Ví dụ thực tế</h3>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Mua sắm:</strong> Áo giá 500.000đ giảm 20%. Số tiền giảm là: (20/100) * 500.000 = 100.000đ. Để tính nhanh giá sau giảm, bạn có thể dùng <Link href="/discount-calculator">Công cụ tính giảm giá</Link>.</li>
            <li><strong>Thuế VAT:</strong> Sản phẩm giá 10 triệu, thuế 8%. Tiền thuế là: 0.08 * 10tr = 800.000đ.</li>
          </ul>
        </>
      );
    case 'percent-change':
      return (
        <>
          <h2>Tăng giảm phần trăm là gì?</h2>
          <p>
            Công cụ này giúp bạn xác định mức độ thay đổi giữa hai giá trị theo thời gian. Nó thường được dùng để tính tốc độ tăng trưởng doanh thu, lợi nhuận, hoặc mức độ biến động giá cả thị trường.
          </p>
          <h3>Công thức tính</h3>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-center my-4">
            % Thay đổi = ((Giá trị mới - Giá trị cũ) ÷ |Giá trị cũ|) × 100%
          </div>
          <p>
            Nếu kết quả là số dương (+), đó là sự <strong>tăng trưởng</strong>. Nếu kết quả là số âm (-), đó là sự <strong>suy giảm</strong>. Nếu bạn muốn tính toán lợi nhuận ngân hàng, hãy thử <Link href="/compound-interest">Công cụ tính lãi kép</Link>.
          </p>
        </>
      );

    // --- NHÓM SỨC KHỎE ---
    case 'bmi':
      return (
        <>
          <h2>Chỉ số BMI là gì?</h2>
          <p>
            BMI (Body Mass Index) là chỉ số khối cơ thể, được tính dựa trên chiều cao và cân nặng để đánh giá tình trạng dinh dưỡng của người trưởng thành. Đây là công cụ sàng lọc tiêu chuẩn được WHO khuyến nghị.
          </p>
          <h3>Bảng phân loại BMI (Theo WHO)</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-3 border border-slate-200">Chỉ số BMI</th>
                  <th className="p-3 border border-slate-200">Phân loại</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-slate-200">&lt; 18.5</td><td className="p-3 border border-slate-200">Thiếu cân</td></tr>
                <tr><td className="p-3 border border-slate-200">18.5 - 24.9</td><td className="p-3 border border-slate-200 text-emerald-600 font-bold">Bình thường (Tốt)</td></tr>
                <tr><td className="p-3 border border-slate-200">25.0 - 29.9</td><td className="p-3 border border-slate-200 text-amber-600 font-bold">Thừa cân</td></tr>
                <tr><td className="p-3 border border-slate-200">&ge; 30.0</td><td className="p-3 border border-slate-200 text-rose-600 font-bold">Béo phì</td></tr>
              </tbody>
            </table>
          </div>
          <h3>Lưu ý quan trọng</h3>
          <p>
            BMI không phân biệt được khối lượng mỡ và khối lượng cơ bắp. Để có cái nhìn toàn diện hơn về nhu cầu năng lượng, hãy kiểm tra thêm <Link href="/bmr-tdee">Chỉ số BMR & TDEE</Link> hoặc xem <Link href="/ideal-weight">Cân nặng lý tưởng</Link>.
          </p>
        </>
      );
    case 'bmr':
      return (
        <>
          <h2>BMR và TDEE là gì?</h2>
          <p>Hiểu rõ hai chỉ số này là chìa khóa để kiểm soát cân nặng (tăng cân hoặc giảm cân) một cách khoa học.</p>
          <ul className="list-disc list-inside space-y-2 ml-2 my-4">
            <li><strong>BMR (Basal Metabolic Rate):</strong> Lượng calo tối thiểu cơ thể cần để duy trì các chức năng sống cơ bản (hô hấp, tuần hoàn, não bộ...) khi nghỉ ngơi hoàn toàn.</li>
            <li><strong>TDEE (Total Daily Energy Expenditure):</strong> Tổng lượng calo bạn tiêu thụ trong một ngày, bao gồm cả BMR và năng lượng cho các hoạt động thể chất/làm việc.</li>
          </ul>
          <h3>Ứng dụng thực tế</h3>
          <p>
            Để <strong>giảm cân</strong>, bạn cần ăn ít hơn chỉ số TDEE (thâm hụt calo). Để <strong>tăng cân</strong>, bạn cần ăn nhiều hơn TDEE (dư thừa calo). Đừng quên kết hợp uống đủ nước, kiểm tra tại <Link href="/water-calculator">Công cụ tính lượng nước uống</Link>.
          </p>
        </>
      );

    // --- NHÓM VĂN BẢN ---
    case 'word-counter':
      return (
        <>
          <h2>Tại sao cần đếm từ và ký tự?</h2>
          <p>
            Trong soạn thảo văn bản, việc kiểm soát độ dài là rất quan trọng. Công cụ này hỗ trợ đắc lực cho:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
            <li><strong>SEO Content:</strong> Viết thẻ Meta Description (150-160 ký tự), tiêu đề chuẩn SEO.</li>
            <li><strong>Social Media:</strong> Bài đăng Twitter/X (280 ký tự), Facebook, Instagram. Nếu bạn cần icon cho bài viết, hãy dùng <Link href="/icon-facebook">Kho Icon Facebook</Link>.</li>
            <li><strong>Học thuật:</strong> Viết tiểu luận, báo cáo với giới hạn số từ cho phép.</li>
          </ul>
          <p>
            Công cụ của chúng tôi hoạt động thời gian thực (Real-time). Nếu bạn cần định dạng lại văn bản (In hoa/Thường), hãy thử <Link href="/doi-kieu-chu">Công cụ đổi kiểu chữ</Link>.
          </p>
        </>
      );
    
    // --- SECURITY ---
    case 'password':
      return (
        <>
          <h2>Tầm quan trọng của mật khẩu mạnh</h2>
          <p>
            Mật khẩu là chốt chặn đầu tiên bảo vệ tài khoản số của bạn. Các mật khẩu yếu như "123456" hay "password" có thể bị hacker dò ra trong chưa đầy 1 giây.
          </p>
          <h3>Tiêu chuẩn mật khẩu an toàn</h3>
          <ul className="list-disc list-inside space-y-2 ml-2 my-4">
            <li><strong>Độ dài:</strong> Tối thiểu 12 ký tự (khuyên dùng 16+).</li>
            <li><strong>Đa dạng ký tự:</strong> Kết hợp chữ Hoa, chữ thường, Số và Ký tự đặc biệt (!@#$).</li>
            <li><strong>Ngẫu nhiên:</strong> Không chứa thông tin cá nhân.</li>
          </ul>
          <p className="text-sm italic text-slate-500">
            Lưu ý: Mật khẩu được tạo ra hoàn toàn trên trình duyệt của bạn (Client-side). Nếu bạn cần tạo mã QR cho mật khẩu Wifi, hãy dùng <Link href="/tao-ma-qr">Công cụ tạo mã QR</Link>.
          </p>
        </>
      );

    // --- MẶC ĐỊNH ---
    default:
      return (
        <>
          <h2>Về công cụ {title}</h2>
          <p>
            Công cụ <strong>{title}</strong> được thiết kế để giúp bạn giải quyết các bài toán tính toán và chuyển đổi một cách nhanh chóng, chính xác và tiện lợi nhất.
          </p>
          <h3>Tính năng nổi bật</h3>
          <ul className="list-disc list-inside space-y-2 ml-2 my-4">
            <li><strong>Miễn phí 100%:</strong> Không cần đăng ký tài khoản.</li>
            <li><strong>Tốc độ cao:</strong> Kết quả hiển thị tức thì ngay khi nhập liệu.</li>
            <li><strong>Giao diện thân thiện:</strong> Dễ sử dụng trên cả máy tính và điện thoại.</li>
          </ul>
          <p>
            Hãy lưu trang này vào danh sách yêu thích (Bookmark) hoặc khám phá thêm các công cụ khác tại <Link href="/">Trang chủ MultiTools</Link>.
          </p>
        </>
      );
  }
};