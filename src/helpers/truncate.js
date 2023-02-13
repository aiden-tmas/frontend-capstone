export default function Truncate(description, amount) {
  function renderTruncatedChild() {
    if (description.length <= amount) {
      return description;
    }

    return (
      description.slice(0, amount) +
      `${description.ellipses ? description.ellipses.repeat(10) : "..."}`
    );
  }
  return renderTruncatedChild();
}
