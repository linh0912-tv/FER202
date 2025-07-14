# Laptop Management System - FER202 PE01

## Mô tả dự án
Ứng dụng quản lý laptop được xây dựng bằng ReactJS, JSON Server, React Router, và React Bootstrap với giao diện hiện đại và responsive.

## Tính năng chính

### 1. Đăng nhập (Login Form)
- Form đăng nhập với 2 trường: Username và Password
- Xác thực thông tin đăng nhập từ JSON Server
- Modal hiển thị thông báo thành công khi đăng nhập đúng
- Alert hiển thị lỗi khi đăng nhập sai
- Sử dụng PropTypes để validate props

### 2. Quản lý Laptop
- **Hiển thị danh sách laptop**: Fetch và hiển thị thông tin từ JSON Server
- **Xem chi tiết**: Button "View Details" cho mỗi laptop với URL động (/laptops/:id)
- **Tìm kiếm**: Input field để tìm kiếm theo tên brand hoặc model
- **404 Not Found**: Xử lý khi không tìm thấy laptop

### 3. Giao diện người dùng
- Sử dụng React Bootstrap cho styling responsive
- Giao diện hiện đại với animations và icons
- Responsive design cho mobile devices
- Validation bằng PropTypes

### 4. Routing
- React Router cho navigation giữa các trang:
  - `/login` - Trang đăng nhập
  - `/laptops` - Trang quản lý laptop
  - `/laptops/:id` - Trang chi tiết laptop
  - `*` - Trang 404 Not Found

## Cài đặt và chạy ứng dụng

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy JSON Server (Terminal 1)
```bash
npm run server
# hoặc
npx json-server --watch public/db.json --port 3001
```

### 3. Chạy React App (Terminal 2)
```bash
npm start
# hoặc
npx react-scripts start
```

### 4. Chạy cả hai cùng lúc
```bash
npm run dev
```

## Thông tin đăng nhập demo
- **Username**: admin
- **Password**: 1234567

Hoặc các tài khoản khác trong file `public/db.json`:
- alice / 1234567 (user, active)
- bob / 1234567 (guest, active)

## Cấu trúc dự án
```
src/
├── components/
│   ├── Login.js          # Component đăng nhập
│   ├── LaptopList.js     # Component danh sách laptop
│   ├── LaptopDetail.js   # Component chi tiết laptop
│   └── NotFound.js       # Component 404
├── App.js                # Component chính với routing
├── App.css              # Styling tùy chỉnh
└── index.js             # Entry point

public/
├── db.json              # Database mock cho JSON Server
├── images/              # Hình ảnh laptop
└── index.html           # HTML template
```

## Dependencies được sử dụng
- **react**: ^19.1.0
- **react-router-dom**: Framework routing
- **react-bootstrap**: UI components
- **bootstrap**: CSS framework
- **prop-types**: Type checking
- **axios**: HTTP client
- **json-server**: Mock REST API
- **concurrently**: Chạy multiple commands

## Tính năng giao diện
- Modern design với gradient backgrounds
- Hover effects và animations
- Loading spinners
- Responsive grid layout
- Font Awesome icons
- Card-based layout
- Modal dialogs
- Alert notifications
- Badge components

## API Endpoints
- `GET /Laptops` - Lấy danh sách laptop
- `GET /Laptops/:id` - Lấy chi tiết laptop
- `GET /UserAccounts` - Lấy danh sách tài khoản

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author
FER202 - SP25 Practical Examination

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
