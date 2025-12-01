
import React from 'react';

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
            <li><strong>Mua sắm:</strong> Áo giá 500.000đ giảm 20%. Số tiền giảm là: (20/100) * 500.000 = 100.000đ.</li>
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
            Nếu kết quả là số dương (+), đó là sự <strong>tăng trưởng</strong>. Nếu kết quả là số âm (-), đó là sự <strong>suy giảm</strong>.
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
            BMI không phân biệt được khối lượng mỡ và khối lượng cơ bắp. Do đó, vận động viên thể hình có thể có BMI cao nhưng không bị béo phì. Hãy kết hợp đo lường các chỉ số khác.
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
            Để <strong>giảm cân</strong>, bạn cần ăn ít hơn chỉ số TDEE (thâm hụt calo). Để <strong>tăng cân</strong>, bạn cần ăn nhiều hơn TDEE (dư thừa calo).
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
            <li><strong>Social Media:</strong> Bài đăng Twitter/X (280 ký tự), Facebook, Instagram.</li>
            <li><strong>Học thuật:</strong> Viết tiểu luận, báo cáo với giới hạn số từ cho phép.</li>
          </ul>
          <p>
            Công cụ của chúng tôi hoạt động thời gian thực (Real-time), hỗ trợ đếm cả số câu và số đoạn văn bản.
          </p>
        </>
      );
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
            <li><strong>Ngẫu nhiên:</strong> Không chứa thông tin cá nhân (ngày sinh, tên) hoặc từ có nghĩa trong từ điển.</li>
          </ul>
          <p className="text-sm italic text-slate-500">
            Lưu ý: Mật khẩu được tạo ra hoàn toàn trên trình duyệt của bạn (Client-side), chúng tôi không lưu trữ bất kỳ thông tin nào.
          </p>
        </>
      );

    // --- NHÓM CHUYỂN ĐỔI ---
    case 'data':
      return (
        <>
          <h2>Hiểu về đơn vị dữ liệu máy tính</h2>
          <p>
            Trong thế giới kỹ thuật số, dữ liệu được đo lường bằng Bit và Byte. Sự nhầm lẫn thường gặp nhất là giữa hệ thập phân (của nhà sản xuất ổ cứng) và hệ nhị phân (của hệ điều hành).
          </p>
          <h3>Bảng quy đổi chuẩn (Hệ nhị phân - IEC)</h3>
          <ul className="list-disc list-inside space-y-2 ml-2 my-4">
            <li>1 Byte (B) = 8 Bits (b)</li>
            <li>1 Kilobyte (KB) = 1024 Bytes</li>
            <li>1 Megabyte (MB) = 1024 KB</li>
            <li>1 Gigabyte (GB) = 1024 MB</li>
            <li>1 Terabyte (TB) = 1024 GB</li>
          </ul>
          <h3>Mb vs MB?</h3>
          <p>
            <strong>Mb (Megabit):</strong> Thường dùng để đo tốc độ mạng (VD: Internet 100 Mbps).<br/>
            <strong>MB (Megabyte):</strong> Thường dùng để đo dung lượng file (VD: Ảnh 5 MB).<br/>
            Tốc độ tải xuống thực tế thường bằng tốc độ mạng chia cho 8 (100 Mbps ~ 12.5 MB/s).
          </p>
        </>
      );

    // --- NHÓM HÌNH HỌC (Geometry) ---
    case 'circle':
    case 'square':
    case 'rectangle':
    case 'triangle':
    case 'trapezoid':
    case 'rhombus':
    case 'parallelogram':
      return (
        <>
          <h2>Hình học phẳng: {title}</h2>
          <p>
            Công cụ này giúp bạn tính toán nhanh các thông số hình học cơ bản như Diện tích (S) và Chu vi (P).
            Đây là các bài toán thường gặp trong chương trình giáo dục phổ thông và ứng dụng thực tế như tính diện tích đất, sơn tường, lót gạch.
          </p>
          <h3>Ứng dụng thực tế</h3>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Xây dựng:</strong> Tính toán vật liệu cần thiết dựa trên diện tích bề mặt.</li>
            <li><strong>Thiết kế:</strong> Sắp xếp bố cục không gian nội thất.</li>
            <li><strong>Nông nghiệp:</strong> Tính diện tích canh tác đất đai.</li>
          </ul>
        </>
      );

    case 'cube':
    case 'sphere':
    case 'cylinder':
    case 'cone':
    case 'cuboid':
      return (
        <>
          <h2>Hình học không gian: {title}</h2>
          <p>
            Đối với các hình khối 3D, chúng ta quan tâm đến Thể tích (V) - sức chứa của vật thể, và Diện tích bề mặt (toàn phần/xung quanh).
          </p>
          <h3>Các khái niệm</h3>
          <ul className="list-disc list-inside space-y-2 ml-2 my-4">
            <li><strong>Thể tích (V):</strong> Khoảng không gian mà vật thể chiếm chỗ. Đơn vị thường là m³, lít.</li>
            <li><strong>Diện tích xung quanh (Sxq):</strong> Tổng diện tích các mặt bên (không tính đáy).</li>
            <li><strong>Diện tích toàn phần (Stp):</strong> Tổng diện tích của tất cả các mặt bao gồm cả đáy.</li>
          </ul>
        </>
      );

    // --- NHÓM CÔNG CỤ KHÁC ---
    case 'qrcode':
      return (
        <>
          <h2>QR Code là gì?</h2>
          <p>
            QR Code (Quick Response Code) là mã vạch ma trận hai chiều có thể được đọc bởi máy quét mã vạch hoặc camera điện thoại.
            Nó có khả năng lưu trữ thông tin như đường dẫn URL, văn bản, thông tin liên hệ (vCard), hoặc kết nối Wifi.
          </p>
          <h3>Tại sao nên dùng QR Code?</h3>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Truy cập nhanh:</strong> Khách hàng không cần gõ lại đường link dài.</li>
            <li><strong>Đa năng:</strong> Dùng trong thanh toán, check-in, menu nhà hàng, danh thiếp.</li>
            <li><strong>Bền bỉ:</strong> Mã QR vẫn có thể đọc được ngay cả khi bị hỏng một phần (nhờ khả năng sửa lỗi).</li>
          </ul>
        </>
      );
      
    case 'random':
      return (
        <>
          <h2>RNG - Tạo số ngẫu nhiên</h2>
          <p>
            Công cụ tạo số ngẫu nhiên (Random Number Generator) sử dụng thuật toán máy tính để đưa ra một hoặc nhiều con số không theo quy luật dự đoán được trong khoảng bạn chọn.
          </p>
          <h3>Ứng dụng</h3>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Bốc thăm trúng thưởng:</strong> Chọn người may mắn công bằng.</li>
            <li><strong>Trò chơi:</strong> Gieo xúc xắc, chia đội.</li>
            <li><strong>Bảo mật:</strong> Tạo mã PIN hoặc mã xác thực ngẫu nhiên.</li>
          </ul>
        </>
      );

    // MẶC ĐỊNH CHO CÁC TOOL CÒN LẠI
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
            <li><strong>Độ chính xác:</strong> Sử dụng các thuật toán chuẩn đã được kiểm định.</li>
          </ul>
          <p>
            Hãy lưu trang này vào danh sách yêu thích (Bookmark) để sử dụng bất cứ khi nào bạn cần!
          </p>
        </>
      );
  }
};
