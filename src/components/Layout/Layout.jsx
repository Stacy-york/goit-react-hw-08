import React from 'react';
import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <AppBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}