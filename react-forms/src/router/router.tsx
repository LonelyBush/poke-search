import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';
import MainPage from '../view/main/main-page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/main" element={<MainPage />} />
    </>,
  ),
);

export default router;
