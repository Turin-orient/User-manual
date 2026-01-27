# Hướng Dẫn Kỹ Thuật Toàn Diện Về Docusaurus

Docusaurus là một trình tạo trang tĩnh (Static Site Generator - SSG) hiện đại, mã nguồn mở được phát triển bởi Meta. Nó được thiết kế đặc biệt để xây dựng các trang web tài liệu tối ưu, nhưng cũng đủ linh hoạt cho blog, trang tiếp thị và các trang web cá nhân.

## 1. Các Tính Năng Cốt Lõi và Kiến Trúc

### Kiến Trúc Nền Tảng
*   **Single-Page Application (SPA):** Không giống như các trình tạo trang tĩnh truyền thống, Docusaurus tạo ra một ứng dụng đơn trang (SPA). Sau khi tải trang đầu tiên (được render tĩnh để tối ưu SEO), các điều hướng tiếp theo được xử lý bởi React Router ở phía client, giúp chuyển trang gần như tức thì mà không cần tải lại toàn bộ trang.
*   **React & MDX:** Docusaurus tận dụng hệ sinh thái React. Nội dung được viết bằng **MDX** (Markdown + JSX), cho phép bạn nhúng các thành phần React trực tiếp vào tài liệu Markdown để tạo nội dung tương tác.
*   **Kiến Trúc Plugin:** Core của Docusaurus không cung cấp tính năng nội dung trực tiếp. Tất cả các tính năng (tài liệu, blog, trang) được ủy quyền cho các plugin riêng lẻ. Điều này giúp hệ thống có tính mô-đun cao.

### Cập Nhật Trong Docusaurus v3.x
Phiên bản 3.x mang đến những thay đổi lớn về hạ tầng kỹ thuật:
*   **Nâng cấp Dependencies:** Yêu cầu Node.js v18.0+ (v3.9 yêu cầu Node.js v20+), React v18 (hỗ trợ concurrent rendering), và TypeScript v5.x.
*   **MDX v3:** Trình biên dịch Markdown chặt chẽ hơn, xử lý nhanh hơn.

### Dự Án Docusaurus Faster
Để giải quyết vấn đề hiệu năng build trên các site lớn, Meta đang phát triển "Docusaurus Faster":
*   **Rspack:** Thay thế Webpack, giúp thời gian build nhanh hơn từ 2-4 lần.
*   **SWC:** Thay thế Babel để biên dịch code JS/TS.

## 2. So Sánh Với Các Giải Pháp Khác

| Tính Năng | Docusaurus | Hugo | MkDocs | GitBook |
| :--- | :--- | :--- | :--- | :--- |
| **Ngôn Ngữ/Build** | Node.js / React | Go (Golang) | Python | Độc quyền (SaaS) |
| **Tốc Độ Build** | Trung bình (cải thiện với v3/Rspack) | Cực nhanh (biên dịch tức thì) | Khá nhanh | N/A (Cloud) |
| **Tùy Biến** | Rất cao (React Component, Swizzling) | Khá (Go templating) | Trung bình (Jinja2) | Hạn chế |
| **Kiến Trúc** | SPA (Trải nghiệm App mượt mà) | MPA (Trang tĩnh truyền thống) | MPA | SPA |
| **Deploy** | Host bất kỳ đâu (GitHub Pages, Netlify) | Host bất kỳ đâu | Host bất kỳ đâu | Host trên GitBook (Có phí) |

**Kết luận so sánh:**
*   Chọn **Hugo** nếu bạn ưu tiên tốc độ build cực nhanh cho hàng nghìn trang và không cần tính năng động của React.
*   Chọn **MkDocs (Material)** nếu bạn thích hệ sinh thái Python và cấu hình đơn giản.
*   Chọn **Docusaurus** nếu bạn muốn trải nghiệm người dùng mượt mà (SPA), khả năng tùy biến sâu bằng React, và các tính năng tài liệu chuyên nghiệp như Versioning, i18n tốt nhất.

## 3. Các Khái Niệm Quan Trọng (Key Concepts)

### Swizzling
Tính năng độc đáo cho phép bạn "xuất" các component mặc định của Docusaurus ra project của mình để chỉnh sửa.
*   **Wrap:** Bọc component gốc để thêm tính năng (an toàn, dễ bảo trì).
*   **Eject:** Thay thế hoàn toàn component gốc (nguy cơ lỗi khi update Docusaurus).

### Quốc Tế Hóa (i18n)
Docusaurus hỗ trợ dịch thuật ngay từ đầu.
*   Hệ thống build sẽ tạo ra các thư mục riêng biệt cho từng ngôn ngữ (`/en/`, `/vi/`, `/fr/`).
*   Có thể dịch file Markdown, file config JSON, và cả các label trong theme React.

### Versioning (Quản Lý Phiên Bản)
Hỗ trợ tạo tài liệu cho nhiều phiên bản phần mềm khác nhau song song (VD: Docs v1.0, v2.0). Docusaurus sẽ lưu trữ ảnh chụp (snapshot) của tài liệu tại thời điểm đánh phiên bản.

## 4. Hướng Dẫn Triển Khai Cơ Bản (Deployment Guide)

Docusaurus tạo ra các tệp tĩnh (HTML/CSS/JS), do đó có thể triển khai trên hầu hết các nền tảng hosting.

### Bước 1: Chuẩn bị Build
Chạy lệnh sau để tạo thư mục `build/` chứa các tệp tĩnh production:
```bash
npm run build
# Hoặc
yarn build
```

### Bước 2: Kiểm tra Build Local
Trước khi đẩy lên server, hãy kiểm tra trang web hoạt động như thế nào:
```bash
npm run serve
```
Lệnh này sẽ khởi chạy server local tại `http://localhost:3000`.

### Bước 3: Cấu hình `docusaurus.config.js`
Đảm bảo các thông số sau chính xác để định tuyến hoạt động đúng:
*   `url`: URL trang web của bạn (VD: `https://my-org.com`).
*   `baseUrl`: Đường dẫn cơ sở (VD: `/` nếu ở root, hoặc `/my-project/` nếu ở thư mục con).

### Bước 4: Triển khai (Ví dụ phổ biến)

#### GitHub Pages
Docusaurus có lệnh deploy tích hợp sẵn cho GitHub Pages.
1.  Cài đặt biến môi trường trong file config (`organizationName`, `projectName`, `deploymentBranch`).
2.  Chạy lệnh:
    ```bash
    GIT_USER=<GITHUB_USERNAME> yarn deploy
    ```
    Hoặc thiết lập **GitHub Actions** để tự động build và deploy khi có commit mới vào nhánh chính.

#### Netlify / Vercel
Đây là các lựa chọn Jamstack phổ biến và dễ nhất.
1.  Kết nối repository GitHub của bạn với Netlify/Vercel.
2.  Cấu hình Build Settings:
    *   **Build Command:** `npm run build`
    *   **Publish Directory:** `build`
3.  Hệ thống sẽ tự động deploy mỗi khi bạn push code.

> **Lưu ý:** Docusaurus v3.x yêu cầu môi trường chạy build phải là **Node.js 18.0+** (hoặc v20+ với Docusaurus v3.9). Hãy đảm bảo server của bạn đã cập nhật phiên bản Node.js.
