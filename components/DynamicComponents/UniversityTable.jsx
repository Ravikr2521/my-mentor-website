import Link from "next/link";
import React from "react";
import { Table } from "react-bootstrap";

const UniversityTable = ({ tableData }) => {
  if (!tableData?.UTable?.length) return null;

  const headerItem = tableData.UTable[0];
  const rows = tableData.UTable.slice(1);
  
  const headers = Object.keys(headerItem).filter((key) => key !== "id" && headerItem[key] !== null);
  const headerValues = headers.map((key) => headerItem[key]);

  return (
    <div className="rounded container">
      <h2 className="table-title">{tableData?.Heading}</h2>
      <Table bordered responsive className="university-table mt-4 rounded desktop_font">
        {headerValues.length > 0 && (
          <thead>
            <tr>
              {headerValues.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((uni, index) => (
            <tr key={index}>
              {headers.map((key, i) => (
                uni[key] !== null && (
                  <td key={i} className={key === "Qty" ? "text-danger" : ""} style={{ width: "10%" }}>
                    {uni[key]}
                  </td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <p className="table-note">{tableData?.remarks}</p>

      <div className="mt-3">
        <Link href="">
          <button className="btn btn-danger rounded text-white fs-6" size="">
            DOWNLOAD E BOOK
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UniversityTable;
