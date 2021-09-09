import React from "react";
import styles from "./MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={styles.summary}>
      <h2>A chicken wing to die for...</h2>
      <p>
        In the little village where i was born, life moved at a slower pace.
        Yet, felt all the richer for it. There, my two uncles were known far and
        wide for their delicious cooking. They seasoned their zesty chicken,
        using only the freshest herbs, and spices! People call them: Los Pollos
        Hermanos; The Chicken Brothers. Today we carry on their tradition in a
        manner that would make my uncles proud. The finest ingredients are
        brought together with love and care, then... slow-cooked to perfection.
        Yes, the old ways are still best at Los Pollos Hermanos. But don't take
        my word for it... One taste, and you'll know.
      </p>
    </section>
  );
}
