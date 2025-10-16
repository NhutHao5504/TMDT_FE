# Hệ Thống Bán Thiết Bị Điện Tử

![Next.js](https://img.shields.io/badge/Next.js-13.0+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.0+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)

## 📋 Giới thiệu

Hệ thống bán thiết bị điện tử là một nền tảng thương mại điện tử hiện đại được xây dựng với Next.js, cung cấp trải nghiệm mua sắm trực tuyến cho các thiết bị điện tử như smartphone, laptop, tablet, và phụ kiện.

## ✨ Tính năng chính

### 🛒 Mua sắm
- **Danh mục sản phẩm** - Phân loại thiết bị theo danh mục
- **Tìm kiếm & Lọc** - Tìm kiếm sản phẩm và lọc theo giá, thương hiệu, tính năng
- **Chi tiết sản phẩm** - Thông tin chi tiết, hình ảnh, đánh giá
- **Giỏ hàng** - Quản lý giỏ hàng và thanh toán

### 👤 Người dùng
- **Đăng ký/Đăng nhập** - Hệ thống xác thực người dùng
- **Quản lý tài khoản** - Thông tin cá nhân và lịch sử mua hàng
- **Theo dõi đơn hàng** - Theo dõi trạng thái đơn hàng

### 🏪 Quản lý
- **Dashboard admin** - Quản lý sản phẩm, đơn hàng, người dùng
- **Quản lý kho** - Theo dõi tồn kho và cập nhật sản phẩm
- **Phân tích** - Thống kê doanh thu và báo cáo

## 🛠 Công nghệ sử dụng

### Frontend
- **Next.js 13+** - React framework với App Router
- **TypeScript** - Ngôn ngữ lập trình
- **Tailwind CSS** - Framework CSS
- **Shadcn/ui** - Component library
- **React Hook Form** - Quản lý form
- **Zod** - Validation schema

### Backend & Database
- **Next.js API Routes** - Backend API
- **Prisma** - ORM database
- **PostgreSQL** - Hệ quản trị cơ sở dữ liệu
- **NextAuth.js** - Xác thực người dùng

### Utilities
- **Zustand** - State management
- **React Query** - Data fetching
- **Stripe** - Hệ thống thanh toán
- **Cloudinary** - Quản lý hình ảnh
- **Vercel** - Platform deployment

## 🚀 Cài đặt và Chạy dự án

### Yêu cầu hệ thống
- Node.js 18.0+ 
- npm, yarn hoặc pnpm
- PostgreSQL database

### Các bước cài đặt

1. **Clone dự án**
```bash
   git clone https://github.com/your-username/electronics-store.git
   cd electronics-store
```

---

## Project Setup

```bash
# install dependencies
$ npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

---