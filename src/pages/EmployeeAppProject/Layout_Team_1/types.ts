import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface Employee {
  name: string;
  surName: string;
  age: number;
  jobPosition?: string;
}
export enum PagesPaths {
  HOME = "/",
  CREATE_EMPLOYEES = "/create",
  EMPLOYEES = "/employees",
}
