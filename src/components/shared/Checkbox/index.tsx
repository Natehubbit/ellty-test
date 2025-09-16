import { FC, HTMLAttributes } from 'react';
import { cn } from '../../../utils';
import Icon from '../Icon';
import styles from './style.module.css';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
  hovered?: boolean;
}

export interface CheckboxMethods {
  check: (val?: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  onCheck,
  checked: value = false,
  hovered = false,
  ...props
}) => {
  return (
    <label
      data-checked={value}
      className={cn(styles.checkbox, hovered ? styles['checkbox-hovered'] : '')}
    >
      <input readOnly {...props} className={styles.default} type="checkbox" checked={value} />
      <Icon name="check" svgProps={{ className: styles.icon }} />
    </label>
  );
};

export default Checkbox;
