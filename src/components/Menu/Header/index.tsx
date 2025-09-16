import styles from '../style.module.css';
import Checkbox from '../../shared/Checkbox';
import { useEffect, useState } from 'react';

interface MenuHeaderProps {
  checkedAll: boolean;
  onSelectAll: (checked: boolean) => void;
}

const MenuHeader = ({ checkedAll, onSelectAll }: MenuHeaderProps) => {
  const [checkAll, setCheckAll] = useState(checkedAll);
  const [hovered, setHovered] = useState(false);

  const callback = (checked: boolean) => {
    setCheckAll(checked);
    onSelectAll(checked);
  };

  const onHover = () => {
    setHovered(true);
  };

  const onLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    setCheckAll(checkedAll);
  }, [checkedAll]);

  return (
    <div className={styles.header}>
      <div className={styles['list-header-content']}>
        <div
          className={styles['list-header-info']}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          onClick={() => callback(!checkAll)}
        >
          <p>All Pages</p>
          <Checkbox hovered={hovered} checked={checkAll} onCheck={callback} />
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
