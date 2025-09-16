import { FC, useState } from 'react';
import Button from '../shared/Button';
import List from '../shared/List';
import { ListItemProps } from '../shared/List/item';
import MenuHeader from './Header';
import styles from './style.module.css';

interface MenuProps {
  list: ListItemProps[];
}

const Menu: FC<MenuProps> = ({ list }) => {
  const [options, setOptions] = useState(list);

  const onSelect = (id: string, checked: boolean) => {
    setOptions((prev) => {
      const newState = prev.map((item) => {
        if (item.id === id) {
          return { ...item, checked };
        }
        return item;
      });
      return newState;
    });
  };

  const onDone = () => {
    console.log('Done', options);
  };

  const onSelectAll = (checked: boolean) => {
    setOptions((prev) => {
      const newState = prev.map((item) => {
        return { ...item, checked };
      });
      return newState;
    });
  };

  const renderFooter = () => {
    return (
      <div className={styles['list-footer-content']}>
        <Button label="Done" onClick={onDone} />
      </div>
    );
  };

  const checkedAll = options.every((item) => item.checked);

  return (
    <div className={styles.menu}>
      <List
        items={options}
        onChange={onSelect}
        footer={renderFooter()}
        header={<MenuHeader checkedAll={checkedAll} onSelectAll={onSelectAll} />}
      />
    </div>
  );
};

export default Menu;
