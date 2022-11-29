import styles from "./Filters.module.css";

interface FilterListItem {
  id: string;
  fullName: string;
}

export function Filters(list: FilterListItem[]) {
  const displayFilters = list.map((item) => (
    <div key={item.id}>{item.fullName}</div>
  ));

  return <section className={styles.filters}>{displayFilters}</section>;
}
