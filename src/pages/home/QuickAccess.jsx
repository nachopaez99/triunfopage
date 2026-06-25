import { Link } from "react-router-dom";

import { quickAccessItems } from "../../data/quickAccessItems";
import { trackEvent } from "../../service/analyticsService";

import "../../styles/pages/home/quickAccess.css";

function QuickAccess() {
  function handleAccessClick(item) {
    trackEvent("home_quick_access_click", {
      target: item.id,
      label: item.title,
      path: item.path,
    });
  }

  return (
    <section className="quick-access" aria-label="Accesos principales">
      <div className="quick-access__container">
        {quickAccessItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="quick-access__card"
            onClick={() => handleAccessClick(item)}
          >
            <span className="quick-access__icon"><img src={item.icon} alt="" /></span>
            <span className="quick-access__title">{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default QuickAccess;