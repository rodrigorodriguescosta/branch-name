const core = require('@actions/core');

async function run() {
  try {
    let branchName = process.env.GITHUB_REF.split('/').pop();
    core.exportVariable('BRANCH_NAME', branchName);
    core.exportVariable('BRANCH_NAME_LOWER_CASE', branchName.toLowerCase());
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
