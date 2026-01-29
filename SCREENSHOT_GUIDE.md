# 📸 Screenshot Guide for Neurond Assistant Documentation

## Hướng dẫn chụp và sắp xếp Screenshots

### Cấu trúc thư mục

```
static/screenshots/
├── macos/          # Screenshots từ macOS
│   ├── api-keys-step1-vercel-dashboard.png
│   ├── api-keys-step2-open-settings.png
│   └── ...
└── windows/        # Screenshots từ Windows
    ├── api-keys-step1-vercel-dashboard.png
    ├── api-keys-step2-open-settings.png
    └── ...
```

---

## 🎯 Naming Convention (Quy tắc đặt tên)

**Format:** `feature-name-stepX-description.png`

**Ví dụ:**
- `api-keys-step1-vercel-dashboard.png`
- `api-keys-step5-openai-entry.png`
- `login-step2-enter-credentials.png`
- `upload-document-step3-select-file.png`

**Quy tắc:**
- ✅ Dùng chữ thường (lowercase)
- ✅ Dùng dấu gạch ngang (-) thay space
- ✅ Tên ngắn gọn, mô tả chính xác
- ✅ Bao gồm số bước (step1, step2, ...)

---

## 📸 Cách chụp screenshot

### Trên macOS:

**Toàn màn hình:**
```
Cmd + Shift + 3
```

**Chọn vùng (Khuyến nghị):**
```
Cmd + Shift + 4
→ Kéo để chọn vùng cần chụp
```

**Chụp cửa sổ cụ thể:**
```
Cmd + Shift + 4 → Space → Click vào cửa sổ
```

**Chỉnh sửa ngay sau khi chụp:**
```
Cmd + Shift + 5
→ Mở công cụ screenshot với options
```

---

### Trên Windows:

**Toàn màn hình:**
```
PrtScn (Print Screen)
```

**Chụp cửa sổ đang active:**
```
Alt + PrtScn
```

**Snipping Tool (Khuyến nghị):**
```
Win + Shift + S
→ Chọn vùng cần chụp
→ Tự động copy vào clipboard
→ Paste vào Paint/editor để save
```

**Snip & Sketch App:**
```
Win + Shift + S
→ Notification xuất hiện
→ Click notification để edit & save
```

---

## ✨ Best Practices cho Screenshots

### 1. Độ phân giải

- **Minimum:** 800x600 pixels
- **Recommended:** 1200x800 pixels hoặc lớn hơn
- **Maximum:** 1920x1080 pixels (để tránh file quá lớn)

### 2. Format file

- ✅ **PNG** - Khuyến nghị (chất lượng tốt, hỗ trợ transparency)
- ✅ **JPG** - OK cho ảnh phức tạp (nhưng kém hơn PNG)
- ❌ **GIF** - Không dùng cho screenshots

### 3. Nội dung cần capture

✅ **Nên chụp:**
- Toàn bộ phần interface liên quan
- Buttons/menu items cần click
- Form fields cần điền
- Confirmation messages/results
- URL bar (nếu quan trọng)

❌ **Không nên chụp:**
- Personal information (che đi nếu có)
- Sensitive data (API keys thật, passwords)
- Unrelated tabs/windows
- Desktop clutter

### 4. Annotations (Chú thích)

**Nên thêm:**
- ⭕ Red circles hoặc boxes highlight điểm quan trọng
- ➡️ Arrows chỉ vào buttons/fields
- 🔢 Numbers cho multiple steps trong 1 screenshot
- ✏️ Text annotations (nếu cần giải thích thêm)

**Tools để annotate:**
- **macOS:** Preview (built-in), Markup tools
- **Windows:** Paint, Snip & Sketch, Paint 3D
- **Cross-platform:** ShareX, Greenshot, Snagit

---

## 📋 Checklist khi chụp screenshots

Cho mỗi feature page, cần:

- [ ] Screenshot cho **TỪNG BƯỚC** trong hướng dẫn
- [ ] **Cả 2 phiên bản:** macOS VÀ Windows
- [ ] Tên file tuân theo naming convention
- [ ] Highlight/annotate điểm quan trọng
- [ ] File size hợp lý (< 500KB mỗi file nếu được)
- [ ] Rõ ràng, dễ đọc (không bị blur)

---

## 🔄 Workflow đề xuất

### Bước 1: Chuẩn bị
1. Mở Neurond Assistant trên browser
2. Đăng nhập với account phù hợp (user/admin)
3. Navigate đến màn hình/feature cần chụp
4. Chuẩn bị snipping tool

### Bước 2: Chụp từng bước
1. Thực hiện Step 1 của feature
2. Chụp screenshot (capture relevant area)
3. Save với tên đúng convention
4. Lặp lại cho các steps tiếp theo

### Bước 3: Annotate
1. Mở screenshot trong editor
2. Thêm circles/arrows/highlights
3. Save lại (cùng tên)

### Bước 4: Organize
1. Copy screenshot vào đúng thư mục:
   - macOS → `static/screenshots/macos/`
   - Windows → `static/screenshots/windows/`
2. Verify tên file khớp với markdown

### Bước 5: Update Markdown
1. Replace placeholder image paths với actual filenames
2. Test trong Docusaurus (`npm run start`)
3. Verify images hiển thị đúng

---

## 🎨 Screenshot Examples

### ✅ Good Example:
```
Clear, focused on relevant UI
Annotated with red box around button
Proper resolution (1200x800)
File: login-step2-enter-credentials.png
```

### ❌ Bad Example:
```
Blurry, too small
No annotations
Includes unrelated content
File: screenshot1.png (tên không rõ ràng)
```

---

## 🔧 Optimization Tips

**Giảm file size:**
1. Crop to only necessary area
2. Use PNG optimization tools:
   - **TinyPNG** (online)
   - **ImageOptim** (macOS)
   - **PNGGauntlet** (Windows)
3. Target: < 300KB per screenshot

**Maintain quality:**
- Chụp ở độ phân giải cao rồi mới optimize
- Không scale down quá nhỏ
- Keep text readable (minimum 12px visible)

---

## 📝 Integration với Documentation

Sau khi có screenshots, update markdown như sau:

```markdown
### Step 1: Access Dashboard

**What to do:** Log in and open dashboard

**macOS:**
![Dashboard - macOS](../../screenshots/macos/feature-step1-dashboard.png)
*Screenshot: Dashboard view on macOS showing navigation menu*

**Windows:**
![Dashboard - Windows](../../screenshots/windows/feature-step1-dashboard.png)
*Screenshot: Dashboard view on Windows showing navigation menu*
```

---

## ❓ FAQ

**Q: Phải chụp CHÍNH XÁC giống nhau trên macOS và Windows?**
A: Không cần 100% giống. Browser interface có thể khác nhau, nhưng **nội dung trong trang web** (Neurond Assistant) phải giống nhau.

**Q: Nếu chỉ có 1 hệ điều hành thì sao?**
A: Chụp trên OS có sẵn trước, dùng placeholder cho OS kia. Note rõ trong documentation.

**Q: File quá lớn phải làm sao?**
A: Optimize bằng PNG compression tools hoặc crop chặt hơn.

**Q: Có cần chụp cả cursor/mouse pointer không?**
A: Không bắt buộc, nhưng có thể helpful để show "click here".

---

## 🚀 Advanced: Dynamic Annotations (New!)

Instead of editing images manually, you can now add red circles and mouse cursors directly in your Markdown using the `AnnotatedImage` component. This is easier to update and maintain.

### How to Use

1. **Import the component** at the top of your `.md` file (one time):
```javascript
import AnnotatedImage from '@site/src/components/AnnotatedImage';
```

2. **Use the component** where you want to show a screenshot:
```jsx
<AnnotatedImage 
  src="/img/ui/login/login_screen.png" 
  alt="Login Screen"
  annotations={[
    { type: 'circle', x: '45%', y: '60%', size: '60px' }, // Red circle around Login button
    { type: 'cursor', x: '47%', y: '62%' }               // Mouse cursor pointing to it
  ]} 
/>
```

### Prop Details:
- **type**: `'circle'` (red ring) or `'cursor'` (mouse pointer).
- **x, y**: Position from the top-left (0% to 100%).
- **size**: (Optional) For circles, defaults to 50px.

### When to use this?
- When you want a consistent "look" for all screenshots.
- When you want to easily move a highlight without recapturing the image.

---

**Ready to create high-quality, visual documentation!** 📸
