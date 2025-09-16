import { FC, SVGProps } from 'react';
import { icons } from '../../../constants/icons';

interface IconProps {
  name: keyof typeof icons;
  svgProps: SVGProps<SVGSVGElement> & {
    title?: string;
  };
}

const Icon: FC<IconProps> = ({ name, svgProps }: IconProps) => {
  const IconComponent = icons[name];
  return <IconComponent {...svgProps} />;
};

export default Icon;
