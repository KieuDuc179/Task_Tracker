# Task Tracker — Custom React Web Application (FER202)

## 1. Giới thiệu ứng dụng (App Concept)

**Task Tracker** là ứng dụng quản lý công việc cá nhân, cho phép người dùng xem danh sách task được lấy từ một API public, đánh dấu task đã hoàn thành/chưa hoàn thành, và xóa task khỏi danh sách. Ứng dụng được xây dựng nhằm thực hành đầy đủ các Learning Outcomes (LO1–LO8) của môn FER202.

- **Loại hình thực hiện:** Cá nhân (Individual)
- **Họ tên:** Kiều Đình Đức
- **Mã sinh viên:** DE201129
- **Lớp:** SE20A04
- **Link GitHub repository:** https://github.com/KieuDuc179/Task_Tracker.git

## 2. Hướng dẫn chạy project (Run Instructions)

```bash
# 1. Clone repository
git clone <link-github-cua-ban>
cd task-tracker

# 2. Cài đặt dependencies
npm install

# 3. Chạy ứng dụng ở môi trường development
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`. Cần có kết nối Internet vì trang Tasks (`/feature`) gọi API public `https://jsonplaceholder.typicode.com/todos` để lấy dữ liệu.

## 3. Cấu trúc thư mục chính

```
src/
  components/
    TaskItemFunctional.js   // Component hiển thị 1 task (dạng Functional)
    TaskItemClass.js         // Component hiển thị 1 task (dạng Class)
    TaskList.js               // Render danh sách task động
    AppNavbar.js              // Navbar điều hướng + hiển thị badge pending
  pages/
    Home.js                   // Trang chủ
    Feature.js                 // Trang chính: fetch API, quản lý task qua Redux
    About.js                   // Trang giới thiệu
  redux/
    Store.js                   // Khởi tạo Redux store
    TasksSlice.js                // Slice quản lý state của tasks (kèm async thunk fetch API)
  css/
    TaskItem.css               // CSS tùy chỉnh cho TaskItem
  data/
    sampleTasks.js             // Data mẫu dùng ở giai đoạn đầu (trước khi tích hợp API thật)
  App.js
  index.js
```

## 4. Giải thích các Learning Outcomes (LO1–LO8)

**LO1 — Setup project & Git**
Project được khởi tạo bằng `npx create-react-app task-tracker`. Repository có ≥5 commit, mỗi commit gắn với một bước phát triển rõ ràng (setup cấu trúc thư mục, cài dependencies, thêm component, v.v.) — xem chi tiết tại lịch sử commit trên GitHub.

**LO2 — Reusable component (Class + Functional)**
Component hiển thị thông tin task được viết theo cả hai dạng: `TaskItemFunctional.js` (functional component) và `TaskItemClass.js` (class component), cùng nhận props là object `task` và render cùng một cấu trúc giao diện.

**LO3 — JSX & ES6 cho dynamic rendering**
`TaskList.js` dùng `.map()` để render động danh sách task từ array. Các đặc điểm ES6 được sử dụng: arrow function (định nghĩa component, callback trong `.map()`), template literal (tạo `key` động và class CSS theo trạng thái task), destructuring (tách props `task`, tách từng field `title, description, status, dueDate`).

**LO4 — Style với Bootstrap + custom CSS**
Giao diện dùng `react-bootstrap` cho Navbar (`AppNavbar.js`) và layout nội dung (`Container`). Component `TaskItemFunctional` được tùy chỉnh thêm bằng CSS riêng tại `src/css/TaskItem.css` (hiệu ứng hover, bo góc, màu sắc).

**LO5 — React Router với 3 route**
`App.js` cấu hình `BrowserRouter` với 3 route: `/` (Home), `/feature` (Feature — danh sách task), `/about` (About). Navbar dùng `<Link>` của `react-router-dom` để chuyển trang không reload.

**LO6 — useState/useEffect cho tính năng tương tác**
Ban đầu (trước khi tích hợp Redux ở LO8), trang Feature dùng `useState` để lưu danh sách task và `useEffect` để cập nhật tiêu đề tab trình duyệt theo số task pending. Hai event handler (`Toggle Status`, `Delete`) được gắn vào nút bấm trong `TaskItemFunctional`.

**LO7 — Fetch API + loading/error state + lazy load**
Dữ liệu task được lấy từ API public `https://jsonplaceholder.typicode.com/todos` bằng `fetch`. Có xử lý trạng thái loading (hiển thị "Đang tải...") và error (hiển thị thông báo lỗi nếu fetch thất bại). Trang `Feature` được lazy-load bằng `React.lazy` + `Suspense` trong `App.js`, chỉ tải khi người dùng truy cập `/feature`.

**LO8 — Redux quản lý global state + summary trên navbar**
State của danh sách task được chuyển từ local state sang Redux global state, quản lý bởi `TasksSlice.js` (dùng Redux Toolkit: `createSlice` + `createAsyncThunk` để fetch API). `Store.js` khởi tạo store và bọc toàn app qua `<Provider>` trong `index.js`. Navbar (`AppNavbar.js`) dùng `useSelector` để đọc số lượng task đang "pending" từ store và hiển thị dưới dạng badge cạnh menu "Tasks" — đây là phần state summary hiển thị trên navbar.

## 5. Đóng góp nhóm (Team Contributions)

Thực hiện cá nhân (Individual) — toàn bộ các LO1–LO8 do [Điền họ tên] thực hiện.

## 6. Minh bạch nguồn tham khảo (Resource Transparency)

- Tài liệu chính thức: React docs (react.dev), React Router docs, React-Bootstrap docs, Redux Toolkit docs.
- API sử dụng: JSONPlaceholder (`https://jsonplaceholder.typicode.com/todos`) — API public miễn phí dùng cho mục đích học tập/test.
- Quá trình xây dựng có sử dụng Claude (Anthropic) để được hướng dẫn, giải thích khái niệm và tham khảo cấu trúc code mẫu cho từng LO; toàn bộ code sau đó được cá nhân chạy thử, điều chỉnh và hiểu rõ trước khi đưa vào bài làm.

## 7. Ghi chú thêm

Hiện tại badge số lượng task pending trên navbar chỉ cập nhật sau khi người dùng đã truy cập trang `/feature` ít nhất một lần (do trang này được lazy-load và đó là lúc dữ liệu được fetch lên Redux store).
