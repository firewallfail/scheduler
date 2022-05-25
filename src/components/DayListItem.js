import React from "react";

import classNames from "classnames";

import "components/DayListItem.scss";


export default function DayListItem(props) {
  const { name, spots, selected, setDay } = props;

  const formatSpots = (spots) => {
    if (!spots) return "no spots remaining";
    if (spots === 1) return "1 spot remaining";
    return `${spots} spots remaining`;
  }

  const dayListItemClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  return (
    <li className={dayListItemClass} onClick={() => setDay(name)} data-testid="day">
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}