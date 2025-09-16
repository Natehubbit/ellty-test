import { FC, ReactNode, useEffect, useState } from 'react';
import ListItem, { ListItemProps } from './item';
import styles from './style.module.css';

interface ListProps {
  items: ListItemProps[];
  onChange: (id: string, checked: boolean) => void;
  footer?: ReactNode;
  header?: ReactNode;
}

const List: FC<ListProps> = ({ items, onChange, footer, header }) => {
  const [options, setOptions] = useState(items);

  const renderHeader = () => {
    if (!header) return null;
    return <div className={styles['list-header-content']}>{header}</div>;
  };

  const renderFooter = () => {
    if (!footer) return null;
    return <div className={styles['list-footer-content']}>{footer}</div>;
  };

  useEffect(() => {
    setOptions(items);
  }, [items]);

  return (
    <div className={styles['list-container']}>
      <div className={styles['list-header']}>{renderHeader()}</div>
      <ul className={styles.list}>
        {options.map(({ checked, id, ...props }) => (
          <ListItem
            {...props}
            id={id}
            onCheck={(val) => {
              onChange(id, val);
            }}
            key={id}
            checked={checked}
          />
        ))}
      </ul>
      <div className={styles['list-footer']}>{renderFooter()}</div>
    </div>
  );
};

export default List;
