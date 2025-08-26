import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HouseDetailPage from './pages/HouseDetailPage';

const AppWrapper = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/house/:id" element={<HouseDetailPage />} />
    </Routes>
  </BrowserRouter>
);

describe('Routing', () => {
  it('render HomePage ban đầu', async () => {
    render(<AppWrapper />);
    // Kiểm tra loading xuất hiện
    expect(screen.getByText(/Đang tải danh sách nhà/i)).toBeInTheDocument();
    // Đợi heading xuất hiện sau khi fetch mock trả về
    const heading = await screen.findByRole('heading', { name: /Danh sách nhà cho thuê/i });
    expect(heading).toBeInTheDocument();
    // Đợi 1 item
    expect(await screen.findByText('Nhà Test 1')).toBeInTheDocument();
  });

  it('chuyển sang HouseDetailPage khi click', async () => {
    const user = userEvent.setup();
    render(<AppWrapper />);

    // Đợi danh sách
    await screen.findByText('Nhà Test 1');

    const link = screen.getByRole('link', { name: /Nhà Test 1/i });
    await user.click(link);

    // Đợi tiêu đề trang chi tiết
    const detailHeading = await screen.findByRole('heading', { name: /Nhà Test 1/i });
    expect(detailHeading).toBeInTheDocument();
    // Một vài thông tin khác
    expect(screen.getByText(/1\.500\.000 VNĐ\/tháng/i)).toBeInTheDocument();
  });
});