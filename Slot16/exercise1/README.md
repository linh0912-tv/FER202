# React CRUD App với JSON Server

Ứng dụng React hoàn chỉnh với các tính năng CRUD (Create, Read, Update, Delete) cho quản lý bài viết, sử dụng JSON Server làm backend và React Bootstrap cho giao diện.

## Tính năng chính

- **Đăng nhập/Đăng xuất**: Hệ thống xác thực đơn giản
- **CRUD Posts**: Tạo, đọc, cập nhật, xóa bài viết
- **Validation**: Kiểm tra dữ liệu với PropTypes
- **Responsive Design**: Giao diện đẹp với React Bootstrap
- **Lazy Loading**: Tải component theo yêu cầu
- **Protected Routes**: Bảo vệ các route yêu cầu đăng nhập
- **Confirmation Dialogs**: Xác nhận trước khi xóa

## Công nghệ sử dụng

- **React 19**: Frontend framework
- **React Router DOM**: Điều hướng
- **React Bootstrap**: UI Components
- **Axios**: HTTP client
- **PropTypes**: Type checking
- **JSON Server**: Mock REST API
- **Bootstrap Icons**: Icons

## Cài đặt và chạy

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy ứng dụng (cách 1 - khuyến nghị)
Chạy đồng thời JSON Server và React App:
```bash
npm run dev
```

### 3. Chạy ứng dụng (cách 2 - thủ công)
Mở 2 terminal:

**Terminal 1** - Chạy JSON Server:
```bash
npm run server
```

**Terminal 2** - Chạy React App:
```bash
npm start
```

## Thông tin truy cập

- **React App**: http://localhost:3003 (hoặc port được assign tự động)
- **JSON Server**: http://localhost:3002
- **API Endpoints**: 
  - GET/POST http://localhost:3002/posts
  - GET/PUT/DELETE http://localhost:3002/posts/:id
  - GET http://localhost:3002/users

## Tài khoản demo

- **Admin**: username: `admin`, password: `admin123`
- **User**: username: `user`, password: `user123`

## Cấu trúc thư mục

```
src/
├── components/
│   ├── Login.js              # Trang đăng nhập
│   ├── PostList.js           # Danh sách bài viết
│   ├── CreatePost.js         # Tạo bài viết mới
│   ├── EditPost.js           # Chỉnh sửa bài viết
│   ├── DeletePost.js         # Xóa bài viết
│   ├── LoadingSpinner.js     # Component loading
│   └── ProtectedRoute.js     # Bảo vệ route
├── App.js                    # Component chính
├── App.css                   # Styles
└── index.js                  # Entry point
db.json                       # Database JSON
```

## Các chức năng chính

### 1. Đăng nhập
- Validation form với PropTypes
- Hiển thị thông báo lỗi/thành công
- Lưu trạng thái đăng nhập vào localStorage

### 2. Quản lý bài viết
- **Xem danh sách**: Hiển thị tất cả bài viết dạng card
- **Tạo mới**: Form validation với PropTypes
- **Chỉnh sửa**: Load dữ liệu hiện tại và cập nhật
- **Xóa**: Modal xác nhận trước khi xóa

### 3. Bảo mật
- Protected routes yêu cầu đăng nhập
- Redirect tự động nếu chưa đăng nhập
- Logout và clear session

### 4. UX/UI
- Responsive design cho mobile/desktop
- Loading states cho tất cả operations
- Error handling và thông báo user-friendly
- Lazy loading cho performance tốt hơn

## Lưu ý kỹ thuật

### PropTypes Validation
Tất cả components đều sử dụng PropTypes để validate props:
```javascript
Component.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.func
};
```

### Lazy Loading
Components được load theo yêu cầu:
```javascript
const PostList = lazy(() => import("./components/PostList"));
```

### Protected Routes
Bảo vệ routes yêu cầu authentication:
```javascript
<ProtectedRoute currentUser={currentUser}>
  <PostList />
</ProtectedRoute>
```

### Error Handling
Xử lý lỗi API và hiển thị thông báo phù hợp cho user.

## Troubleshooting

### Lỗi CORS
Nếu gặp lỗi CORS, đảm bảo JSON Server chạy trên port 3001.

### Package conflicts
Nếu có conflict packages, xóa `node_modules` và chạy lại:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build production
```bash
npm run build
```

## Mở rộng

Có thể mở rộng thêm:
- Authentication với JWT
- Upload hình ảnh
- Phân trang
- Search và filter
- Comments system
- User management

---

Phát triển bởi: [Tên của bạn]
Email: [Email của bạn]

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
