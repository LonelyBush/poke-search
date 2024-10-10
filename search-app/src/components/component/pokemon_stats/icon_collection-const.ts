import hpIcon from '../../../assets/icon/heart-icon.svg';
import defIcon from '../../../assets/icon/shield-icon.svg';
import atackIcon from '../../../assets/icon/sword-icon.svg';
import speedIcon from '../../../assets/icon/wing-icon.svg';
import hpIconDark from '../../../assets/icon/heart-icon-dark.svg';
import defIconDark from '../../../assets/icon/shield-icon-dark.svg';
import atackIconDark from '../../../assets/icon/sword-icon-dark.svg';
import speedIconDark from '../../../assets/icon/wing-icon-dark.svg';

interface IconCollectionInterface {
  [key: string]: string;
  hp: string;
  defense: string;
  attack: string;
  speed: string;
}

export const iconCollection: IconCollectionInterface = {
  hp: hpIcon,
  defense: defIcon,
  attack: atackIcon,
  speed: speedIcon,
};
export const darkIconCollection: IconCollectionInterface = {
  hp: hpIconDark,
  defense: defIconDark,
  attack: atackIconDark,
  speed: speedIconDark,
};
