import styles from "./ListItem.module.css";

interface ItemData {
  key: string;
  title: string;
  src: string;
  creators: string[];
}

export function ListItem({ title, src, creators }: ItemData) {
  return (
    <section className={styles.list_item}>
      <div className={styles.image_background}>
        <img src={src} alt={title} />
      </div>

      <h2>{title}</h2>

      {creators && creators.length > 0 && (
        <ul>
          {creators.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
