/**
 * Concatenate classNames for several scss classes in modules
 * @param  {string[]} classNames Different classNames
 * @returns {string} String of concatenated classes
 */
export const concatClassNames = (...classNames) =>
  classNames.filter((className) => !!className).join(' ');
