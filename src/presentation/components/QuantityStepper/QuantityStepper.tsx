import { decrementQuantity, incrementQuantity, MIN_QUANTITY } from '../../../domain/rules/quantity'
import { formatQuantity } from '../../formatters/formatQuantity'
import styles from './QuantityStepper.module.scss'

type QuantityStepperProps = {
  value: number
  onChange: (value: number) => void
}

export function QuantityStepper({ value, onChange }: QuantityStepperProps) {
  const decrement = () => onChange(decrementQuantity(value))
  const increment = () => onChange(incrementQuantity(value))

  return (
    <div className={styles.stepper} role="group" aria-label="Seletor de quantidade">
      <button
        type="button"
        className={styles.button}
        aria-label="Diminuir quantidade"
        disabled={value <= MIN_QUANTITY}
        onClick={decrement}
      >
        –
      </button>
      <output className={styles.value} aria-label="Quantidade">
        {formatQuantity(value)}
      </output>
      <button type="button" className={styles.button} aria-label="Aumentar quantidade" onClick={increment}>
        +
      </button>
    </div>
  )
}
