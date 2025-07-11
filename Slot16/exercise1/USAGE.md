# Hướng dẫn sử dụng ứng dụng

## Khởi chạy ứng dụng

### Cách 1: Chạy đồng thời (Khuyến nghị)
```bash
npm run dev
```

### Cách 2: Chạy riêng biệt
**Terminal 1 - JSON Server:**
```bash
npm run server
```

**Terminal 2 - React App:**
```bash
npm start
```

## Thông tin truy cập
- **React App**: http://localhost:3003 (hoặc port được assign tự động)
- **JSON Server**: http://localhost:3002

## Tài khoản đăng nhập
- **Admin**: username: `admin`, password: `admin123`
- **User**: username: `user`, password: `user123`

## Luồng sử dụng

### 1. Đăng nhập
1. Mở http://localhost:3003 (hoặc port được hiển thị trong terminal)
2. Nhập thông tin đăng nhập (admin/admin123 hoặc user/user123)
3. Click "Đăng nhập"

### 2. Quản lý bài viết
- **Xem danh sách**: Sau khi đăng nhập thành công
- **Tạo bài viết mới**: Click "Tạo bài viết mới"
- **Chỉnh sửa**: Click "Chỉnh sửa" trên bài viết
- **Xóa**: Click "Xóa" và xác nhận

### 3. Validation
- Form sẽ kiểm tra dữ liệu đầu vào
- Hiển thị lỗi validation nếu có
- Không cho phép submit khi có lỗi

### 4. Đăng xuất
- Click "Đăng xuất" ở góc phải trên
- Sẽ được chuyển về trang đăng nhập

## Tính năng nổi bật

### PropTypes Validation
- Kiểm tra kiểu dữ liệu props
- Validation form input
- Error handling

### React Bootstrap UI
- Giao diện responsive
- Components đẹp và hiện đại
- Icons từ Bootstrap Icons

### Lazy Loading
- Load components theo yêu cầu
- Cải thiện performance
- Loading states

### Protected Routes
- Bảo vệ routes yêu cầu authentication
- Redirect tự động
- Session management

### Confirmation Dialogs
- Xác nhận trước khi xóa
- Modal confirmations
- User-friendly messages

## Cấu trúc API

### Endpoints
- `GET /posts` - Lấy danh sách bài viết
- `POST /posts` - Tạo bài viết mới
- `GET /posts/:id` - Lấy bài viết theo ID
- `PUT /posts/:id` - Cập nhật bài viết
- `DELETE /posts/:id` - Xóa bài viết
- `GET /users` - Lấy danh sách users

### Data Format
**Post:**
```json
{
  "id": 1,
  "title": "Tiêu đề bài viết",
  "content": "Nội dung bài viết"
}
```

**User:**
```json
{
  "id": 1,
  "username": "admin",
  "password": "admin123"
}
```

## Troubleshooting

### Lỗi thường gặp

**1. EADDRINUSE Error**
- Port đã được sử dụng
- Đổi port trong package.json
- Hoặc kill process đang dùng port

**2. CORS Error**
- Đảm bảo JSON Server chạy đúng port
- Kiểm tra URL API trong config

**3. Module not found**
- Chạy `npm install`
- Xóa node_modules và cài lại

**4. Validation errors**
- Kiểm tra PropTypes definitions
- Đảm bảo pass đúng props

### Debug Tips
1. Mở Developer Tools (F12)
2. Kiểm tra Console tab cho errors
3. Kiểm tra Network tab cho API calls
4. Kiểm tra Local Storage cho session

## Cải tiến có thể thêm
- JWT Authentication
- Image upload
- Pagination
- Search & Filter
- Real-time updates với WebSocket
- Unit tests
- E2E tests
