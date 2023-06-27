interface IRoute {
  path: string;
  pageTitle?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPath?: (...params: any[]) => string;
}

export const routes = {
  root: {
    path: '/',
  },
  home: {
    path: '/',
    pageTitle: 'Главная',
  },
  notFound: {
    path: '*',
    pageTitle: '404',
  },
  posts: {
    path: '/posts',
    pageTitle: 'Посты',
  },
  albums: {
    path: '/albums',
    pageTitle: 'Фото',
  },
  todos: {
    path: '/todos',
    pageTitle: 'Задачи',
  },
};

export type TRoutes = Record<keyof typeof routes, IRoute>;
