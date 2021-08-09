const core = require('@actions/core');
const github = require('@actions/github');

try{
    // throw (new Error("Some error occurred"))

    core.debug("This is a debug message"); //Executed only when ACTIONS_STEP_DEBUG is set to true
    core.warning("This is a warning message"); //Executed only when ACTIONS_STEP_WARNING is set to true
    core.error("This is a warning message"); //Executed only when ACTIONS_STEP_ERROR is set to true

    const name = core.getInput('who-to-greet');
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time",time.toTimeString());

    core.exportVariable('HELLO', 'hello');

    core.startGroup("Logging Github object");
    console.log(JSON.stringify(github, null, '\t'));
    core.endGroup();

} catch (error){
    core.setFailed(error.message)
}