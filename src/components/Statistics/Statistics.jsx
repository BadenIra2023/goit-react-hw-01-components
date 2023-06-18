import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import  { getRandomHexColor } from 'randomcolor.js';
    
export const Statistics = props => {
    const { stats, title } = props;
  return (
      <section className={css.statistics}>
          
  {{title} && <h2 className={css.title}>{title}</h2>}

          <ul className={css.statlist}>
              {stats.map(({ id, label, percentage }) => {
            const color = getRandomHexColor();
                  return (
                      <li className={css.item} style={{
                          backgroundColor: color,
                      }}
                          key={id}>
                          <span className={css.label}>{label}</span>
                          <span className={css.percentage}> {percentage} %</span>
                      </li>); })}
            </ul>
</section>
  );
};
Statistics.propTypes = {title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf ({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })};