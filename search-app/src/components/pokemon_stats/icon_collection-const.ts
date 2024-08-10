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
  hp: hpIcon.src,
  defense: defIcon.src,
  attack: atackIcon.src,
  speed: speedIcon.src,
};
export const darkIconCollection: IconCollectionInterface = {
  hp: hpIconDark.src,
  defense: defIconDark.src,
  attack: atackIconDark.src,
  speed: speedIconDark.src,
};
