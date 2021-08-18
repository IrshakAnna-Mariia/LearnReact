const SumPrice = ({priceArr}) => {
  const sumPrise = priceArr.reduce((a, b) => (a + b.price * b.number), 0);

  return (
    <p>Sum: {sumPrise}</p>
  )
}

export default SumPrice;
