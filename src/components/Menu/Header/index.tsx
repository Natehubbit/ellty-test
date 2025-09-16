import styles from '../style.module.css';
import Checkbox from '../../shared/Checkbox';
import { useEffect, useState } from 'react';

interface MenuHeaderProps {
  checkedAll: boolean;
  onSelectAll: (checked: boolean) => void;
}

const MenuHeader = ({ checkedAll, onSelectAll }: MenuHeaderProps) => {
  const [checkAll, setCheckAll] = useState(checkedAll);

  const callback = (checked: boolean) => {
    setCheckAll(checked);
    onSelectAll(checked);
  };

  useEffect(() => {
    setCheckAll(checkedAll);
  }, [checkedAll]);

  return (
    <div className={styles.header} onClick={() => callback(!checkAll)}>
      <div className={styles['list-header-content']}>
        <div className={styles['list-header-info']}>
          <p>All Pages</p>
          <Checkbox checked={checkAll} onCheck={callback} />
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
