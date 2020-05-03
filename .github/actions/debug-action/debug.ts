import * as core from '@actions/core'

const run = async (): Promise<void> => {
  try {
    const message = `👋 Hello world`;
    core.debug(message)
    core.setOutput('amazing-message', message)
  } catch (error) {
    core.setFailed(`Debug-action failure: ${error}`)
  }
}

run();

export default run;
