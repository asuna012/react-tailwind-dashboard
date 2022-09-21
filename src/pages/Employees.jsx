import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
  NumericEditCell,
} from "@syncfusion/ej2-react-grids";
import { useRef } from "react";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  const gridSearchBarValue = useRef(null);
  const textValue = gridSearchBarValue.current;

  const created = () => {
    document
      .getElementById(textValue.element.id + "_searchbar")
      .addEventListener("keyup", (event) => {
        textValue.search(event.target.value);
      });
  };

  const searchSettings = {
    fields: ["Title", "Country", "ReportsTo", "Name"],
  };

  return (
    <div className="m-10 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        ref={gridSearchBarValue}
        created={created}
        searchSettings={searchSettings}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
