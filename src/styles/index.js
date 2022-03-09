/**
 * Background generator by Pokemon type
 * @param {*} props
 * @returns Background generated based on the Pokemon type
 */
export function generateBackgroundByType(props) {
  return `
    background: var(--bg-${props.maintype});
    background: radial-gradient(
      circle at bottom right,
      #f4f8f6 -50%,
      var(--bg-${props.maintype}) 50%
    );
  `;
}

/**
 *
 * @param {*} id
 * @returns Pokemon number formated to 3 digits
 */
export const formattedId = (id) => `${id}`.padStart(3, "0");
