export const classNames = (classes: object): string => {
    return Object
        .entries(classes)
        .filter(entry => entry[1])
        .map(entry => entry[0])
        .join(' ');
  };
  