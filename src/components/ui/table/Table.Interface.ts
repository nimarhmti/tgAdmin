import type { ColumnDef, Row, PaginationState } from "@tanstack/react-table";

export interface ReactTableProps<T extends object> {
  data: T[] | any;
  columns: ColumnDef<T>[];
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  onPaginationChange?: (pagination: PaginationState) => void;
  className?: string;
}
