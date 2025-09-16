import { FC, useState } from 'react';
import Button from '../shared/Button';
import List from '../shared/List';
import { ListItemProps } from '../shared/List/item';
import MenuHeader from './Header';

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
    return <Button label="Done" onClick={onDone} />;
  };

  const checkedAll = options.every((item) => item.checked);

  return (
    <List
      items={options}
      onChange={onSelect}
      footer={renderFooter()}
      header={<MenuHeader checkedAll={checkedAll} onSelectAll={onSelectAll} />}
    />
  );
};

export default Menu;
