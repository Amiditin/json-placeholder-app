import { useEffect, useMemo } from 'react';
import { Outlet, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { usePageTitles } from '@/shared/hooks';
import { routes } from '@/router';

import type { MenuProps } from 'antd';

import styles from './MainLayout.module.scss';

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  usePageTitles(routes);

  useEffect(() => {
    if (location.pathname === routes.root.path) {
      navigate(routes.posts.path);
    }
  }, [location, navigate]);

  const menuItems: MenuProps['items'] = useMemo(
    () => [
      {
        label: routes.posts.pageTitle,
        key: routes.posts.path,
        onClick: () => navigate(routes.posts.path),
      },
      {
        label: routes.albums.pageTitle,
        key: routes.albums.path,
        onClick: () => navigate(routes.albums.path),
      },
      {
        label: routes.todos.pageTitle,
        key: routes.todos.path,
        onClick: () => navigate(routes.todos.path),
      },
    ],
    [navigate],
  );

  return (
    <Layout>
      <Layout.Header className={styles.header}>
        <Menu
          className={styles.container}
          theme="dark"
          mode="horizontal"
          items={menuItems}
          selectedKeys={[location.pathname]}
        />
      </Layout.Header>
      <Layout.Content className={styles.content}>
        <div className={styles.container}>
          <Outlet />
          <ScrollRestoration />
        </div>
      </Layout.Content>
    </Layout>
  );
};
