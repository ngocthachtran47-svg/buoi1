import { StrictMode } from 'react'          // [1] Nhập StrictMode từ thư viện react
import { createRoot } from 'react-dom/client' // [2] Nhập hàm tạo "gốc React" từ react-dom
import './index.css'                          // [3] Nhập CSS toàn cục
import App from './App.tsx'                   // [4] Nhập thành phần App — giao diện gốc
 
createRoot(                                   // [5] Tạo gốc React...
  document.getElementById('root')             // [6] ...gắn vào thẻ div#root trong index.html
).render(                                     // [7] Bắt đầu kết xuất (render) giao diện
  <StrictMode>                               // [8] Bật chế độ kiểm tra nghiêm ngặt (dev only)
    <App />                                  // [9] Thành phần App — chứa toàn bộ UI
  </StrictMode>,
)
