//Option.jsx
import css from "./Option.module.css";

export default function Option({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.option}>
      <button className={css.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.btn}
          onClick={() => {
            resetFeedback();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
