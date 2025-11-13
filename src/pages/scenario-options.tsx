import { CONFIG } from 'src/config-global';

import { ScenarioOptionsView } from 'src/sections/scenario/scenario-options-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Scenario Options - ${CONFIG.appName}`}</title>

      <ScenarioOptionsView />
    </>
  );
}