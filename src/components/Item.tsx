export function Item({ item, onDeleteItem, onToggleIetms }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onToggleIetms(item.id)
        }}
      />
      <span
        style={
          item.packed
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
      >
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id)
        }}
      >
        ❌
      </button>
    </li>
  )
}
