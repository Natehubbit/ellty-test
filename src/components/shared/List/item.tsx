import { FC, useEffect, useState } from 'react';
import { cn } from '../../../utils';
import Checkbox from '../Checkbox';
import styles from './style.module.css';

export interface ListItemProps {
  id: string;
  label: string;
  checked: boolean;
  onCheck?: (checked: boolean) => void;
  header?: boolean;
}

const ListItem: FC<ListItemProps> = ({ label, checked: val = false, onCheck, header }) => {
  const [hovered, setHovered] = useState(false);
  const [checked, setChecked] = useState(val);

  const onHover = () => {
    setHovered(true);
  };

  const onLeave = () => {
    setHovered(false);
  };

  const onClickItem = () => {
    setChecked((value) => !value);
    onCheck?.(!checked);
  };

  useEffect(() => {
    setChecked(val);
  }, [val]);

  return (
    <li
      className={styles['list-item']}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClickItem}
    >
      <div className={cn(styles.content, header ? styles['list-header'] : '')}>
        <div>
          <p>{label}</p>
        </div>
        <Checkbox hovered={hovered} checked={checked} onCheck={onCheck} />
      </div>
    </li>
  );
};

export default ListItem;
