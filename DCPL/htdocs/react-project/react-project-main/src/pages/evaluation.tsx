import { CONFIG } from 'src/config-global';

import { EvaluationView } from 'src/sections/evaluation/evaluation-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Evaluation - ${CONFIG.appName}`}</title>

      <EvaluationView />
    </>
  );
}