import React from "react";
import { Redirect } from "react-router-dom";
import AttendancePage from "../features/attendance/containers/AttendancePage";
import CameraPage from "../features/camera/containers/CameraPage";
import DashboardPage from "../features/dashboard/containers/DashboardPage";
import HomePage from "../features/homepage/containers/HomePage";
import ProfilePage from "../features/profile/containers/ProfilePage";
import UserLoginPage from "../features/userLogin/containers/UserLoginPage";
import UserLogoutPage from "../features/userLogout/containers/UserLogoutPage";
import UserRegisterPage from "../features/userRegister/containers/UserRegisterPage";
import KehadiranPage from "../features/kehadiran/containers/KehadiranPage";
import JitsiMeet from "../features/jitsiMeet/containers/JitsiMeet";
import AdminDashboardPage from "../features/admindashboard/containers/AdminDashboardPage";
import AdminKehadiranPage from "../features/adminkehadiran/containers/AdminKehadiranPage";
import AdminAttendancePage from "../features/adminattendance/containers/AdminAttendancePage";
import AdminProfilePage from "../features/adminprofile/containers/AdminProfilePage";
import AdminJadwalPage from "../features/adminjadwal/containers/AdminJadwalPage";
import TabelJadwalPage from "../features/tabeljadwal/containers/TabelJadwalPage";

const authProtectedRoutes = [
  { path: "/dashboard", component: DashboardPage },
  { path: "/camera", component: CameraPage },
  { path: "/attendance", component: AttendancePage },
  { path: "/kehadiran", component: KehadiranPage },
  { path: "/jadwal", component: TabelJadwalPage },
  { path: "/profile", component: ProfilePage },
  { path: "/meeting", component: JitsiMeet },
  { path: "/logout", component: UserLogoutPage },
  { path: "/kehadiran", component: KehadiranPage },

   { path: "/admin/jadwal", component: AdminJadwalPage },
  { path: "/admin/kehadiran", component: AdminKehadiranPage },
  { path: "/admin/attendance", component: AdminAttendancePage },
  { path: "/admin/profile", component: AdminProfilePage },
  { path: "/admin/dashboard", component: AdminDashboardPage },
 
  {
    path: "/admin",
    exact: true,
    component: () => <Redirect to="/admin/dashboard" />,
  },
  { path: "/", exact: true, component: () => <Redirect to="/homepage" /> },
];

const publicRoutes = [
  { path: "/login", component: UserLoginPage },
  { path: "/register", component: UserRegisterPage },
  { path: "/homepage", component: HomePage },
];

export { authProtectedRoutes, publicRoutes };
