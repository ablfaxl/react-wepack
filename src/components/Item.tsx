interface ItemProps {
  item: {
    description: string
    quantity: number
    packed: boolean
    id: number
  }
  onDeleteItem: (arg1: number) => void
  onToggleIetms: (arg1: number) => void
}

export function Item({ item, onDeleteItem, onToggleIetms }: ItemProps) {
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
