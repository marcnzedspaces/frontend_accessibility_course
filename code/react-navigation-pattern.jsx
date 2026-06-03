import React from "react";
import { NavLink } from "react-router-dom";

export function MainNavigation() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li><NavLink to="/overview">Overview</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
      </ul>
    </nav>
  );
}

// Trainer notes:
// Verify the rendered HTML. Current page state should be exposed.
// Depending on router version, NavLink may already apply aria-current="page".
