import { useState, createContext, PropsWithChildren } from "react";

import { LayoutProps } from "pages/EmployeeAppProject/Layout_Team_1/types";
import { Employee } from "pages/EmployeeAppProject/Layout_Team_1/types";

export interface EmployeeContextType {
  employee: Employee;
  setEmployee: (e: Employee) => void;
}

export const EmployeeAppContext = createContext<EmployeeContextType>({
  employee: {
    name: "",
    surName: "",
    age: "",
    jobPosition: "",
  },
  setEmployee: () => {},
});

function EmployeeAppContextProvider({
  children,
}: PropsWithChildren<LayoutProps>) {
  const [employee, setEmployee] = useState<Employee>({
    name: "",
    surName: "",
    age: "",
    jobPosition: "",
  });

  return (
    <EmployeeAppContext.Provider
      value={{ employee: employee, setEmployee: setEmployee }}
    >
      {children}
    </EmployeeAppContext.Provider>
  );
}

export default EmployeeAppContextProvider;
