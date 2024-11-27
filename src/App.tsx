import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { CustomThemeProvider, useCustomTheme } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { getTheme } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Ecommerce from './pages/Ecommerce';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CustomThemeProvider>
          <AppContent />
        </CustomThemeProvider>
      </AuthProvider>
    </Router>
  );
};

const AppContent = () => {
  const { darkMode } = useCustomTheme();
  const theme = getTheme(darkMode ? 'dark' : 'light');

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Box sx={{ flex: 1 }}>
                    <Home />
                  </Box>
                  <Footer />
                </Box>
              }
            />
            <Route
              path="/about"
              element={
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Box sx={{ flex: 1 }}>
                    <About />
                  </Box>
                  <Footer />
                </Box>
              }
            />
            <Route
              path="/contact"
              element={
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Box sx={{ flex: 1 }}>
                    <Contact />
                  </Box>
                  <Footer />
                </Box>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/ecommerce"
              element={
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Box sx={{ flex: 1 }}>
                    <Ecommerce />
                  </Box>
                  <Footer />
                </Box>
              }
            />
            <Route
              path="/checkout"
              element={
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Box sx={{ flex: 1 }}>
                    <Checkout />
                  </Box>
                  <Footer />
                </Box>
              }
            />
            <Route
              path="/order-confirmation"
              element={
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Box sx={{ flex: 1 }}>
                    <OrderConfirmation />
                  </Box>
                  <Footer />
                </Box>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
};

export default App;
