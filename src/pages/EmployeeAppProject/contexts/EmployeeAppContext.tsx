import { useState, createContext, PropsWithChildren } from "react";

import { Employee } from "pages/EmployeeAppProject/Layout_Team_1/types";

export interface EmployeeContextType {
  employee: Employee;
  setter: (e: Employee) => void;
}

export const EmployeeAppContext = createContext<EmployeeContextType>({
  employee: {
    name: "",
    surName: "",
    age: 0,
    jobPosition: "",
  },
  setter: () => {},
});

export const EmployeeAppContextProvider = ({ children }: PropsWithChildren) => {
  const [employee, setEmployee] = useState<Employee>({
    name: "",
    surName: "",
    age: 0,
    jobPosition: "",
  });

  return (
    <EmployeeAppContext.Provider
      value={{ employee: employee, setter: setEmployee }}
    >
      {children}
    </EmployeeAppContext.Provider>
  );
};
