import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = props => {
    const { transactions } = props;
    return (
        <table className={css.transactionhistory}>
  <thead className={css.tread}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
<tbody>
       {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td className={css.amount}>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}         
  </tbody>
</table>
    )
}
    TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};