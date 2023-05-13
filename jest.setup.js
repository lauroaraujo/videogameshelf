import '@testing-library/jest-dom/extend-expect';
import { loadEnvConfig } from '@next/env';

const jestSetup = async () => {
  loadNextJsDotEnvDotTest();
};

/**
 * https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#test-environment-variables
 */
const loadNextJsDotEnvDotTest = () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
}

export default jestSetup;
