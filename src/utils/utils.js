import {
  BsEmojiNeutralFill,
  BsFillEmojiFrownFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';

export function getColorByType(type) {
  switch (type) {
    case 'good':
      return '#09C83B';
    case 'neutral':
      return '#FFA500';
    case 'bad':
      return '#C80027';
    default:
  }
}

export function getIconByType(type) {
  switch (type) {
    case 'good':
      return BsFillEmojiSmileFill;

    case 'neutral':
      return BsEmojiNeutralFill;

    case 'bad':
      return BsFillEmojiFrownFill;
    default:
  }
}
