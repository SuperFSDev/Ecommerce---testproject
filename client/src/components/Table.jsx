import { useState, useMemo } from "react";
import Pagination from "./Pagenation";
import { CheckBox } from "@material-ui/icons";
import { DetailsModal } from "./DetailsModal";

let PageSize = 10;

export function Table({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState(products);
  const [isAsc, setIsAsc] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, items]);

  const sortByTitle = (e) => {
    const products = items;
    if (isAsc) {
      e.target.setAttribute("aria-sort", "descending");
      products.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else {
      e.target.setAttribute("aria-sort", "ascending");
      products.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    setIsAsc(!isAsc);
    setItems([...products]);
  };

  const search = (e) => {
    const searchQuery = e.target.value;
    const searchedResult = products.filter((product) =>
      product.title.includes(searchQuery)
    );
    setItems(searchedResult);
  };

  const handleRowClick = (item) => {
    console.log("selected");
    setSelectedItem(item);
  };

  const onClose = () => {
    setSelectedItem();
  };

  return (
    <>
      <div>
        <input
          type="text"
          id="myInput"
          onKeyUp={(e) => search(e)}
          placeholder="Search for titles..."
          title="Type in a title"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th aria-sort="ascending" onClick={(e) => sortByTitle(e)}>
              Title
              <span aria-hidden="true"></span>
            </th>
            <th>Description</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((record) => (
            <tr key={record.id} onClick={() => handleRowClick(record)}>
              <td>{record.title}</td>
              <td>{record.desc}</td>
              <td>{record.color}</td>
              <td>{record.size}</td>
              <td>{record.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={products.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {selectedItem && (
        <DetailsModal item={selectedItem} onClose={onClose}></DetailsModal>
      )}
    </>
  );
}
