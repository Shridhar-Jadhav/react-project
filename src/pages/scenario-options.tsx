
import { useEffect } from 'react';
import { CONFIG } from 'src/config-global';

import { ScenarioOptionsView } from 'src/sections/scenario/scenario-options-view';

// ----------------------------------------------------------------------

export default function Page() {
  useEffect(() => {
    let timer: any;
    const reset = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        window.location.href = '/sign-up';
      }, 60000);
    };
    reset();
    window.addEventListener('mousemove', reset);
    window.addEventListener('keydown', reset);
    window.addEventListener('scroll', reset);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', reset);
      window.removeEventListener('keydown', reset);
      window.removeEventListener('scroll', reset);
    };
  }, []);
  {
    return (
      <>
      <style>{`
          .css-1xq1kdw {
            max-width: 100% !important;
            background: transparent;
            padding: 0;
          }
        `}</style>
        <title>{`Scenario Options - ${CONFIG.appName}`}</title>

        <ScenarioOptionsView />
      </>
    );
  }
}