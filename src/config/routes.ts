interface routeModel {
  id: number;
  path: string;
  label: string;
  private: boolean;
}

export const routes: routeModel[] = [
  { id: 1, label: "test", path: "test", private: true },
];
