import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const departmentsData = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const ListComponent: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (departmentsData.some((dept) => dept.department === name)) {
      const newCheckedItems: Record<string, boolean> = {};
      departmentsData.forEach((dept) => {
        if (dept.department === name || dept.sub_departments.includes(name)) {
          newCheckedItems[dept.department] = checked;
          dept.sub_departments.forEach((subDept) => {
            newCheckedItems[subDept] = checked;
          });
        } else {
          newCheckedItems[dept.department] = checkedItems[dept.department];
          dept.sub_departments.forEach((subDept) => {
            newCheckedItems[subDept] = checkedItems[subDept];
          });
        }
      });
      setCheckedItems(newCheckedItems);
    } else {
      setCheckedItems((prev) => ({ ...prev, [name]: checked }));
    }
  };

  return (
    <div>
      <ul>
        {departmentsData.map((dept) => (
          <li key={dept.department}>
            <Checkbox
              checked={checkedItems[dept.department] || false}
              onChange={handleCheck}
              name={dept.department}
            />
            {dept.department}
            <ul>
              {dept.sub_departments.map((subDept) => (
                <li key={subDept}>
                  <Checkbox
                    checked={checkedItems[subDept] || false}
                    onChange={handleCheck}
                    name={subDept}
                  />
                  {subDept}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
