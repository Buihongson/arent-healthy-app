type INavbar = {
  logo: string;
  name: string;
  path: string;
  badge?: number;
};

type IMenuDropdown = {
  path: string;
  name: string;
};

type IFootBar = {
  name: string;
  path: string;
};

export type { INavbar, IMenuDropdown, IFootBar };
