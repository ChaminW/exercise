const {createFile} = require('./util/fileUtils');
const tasks = require('./service/tasks');

/*
// Execution of task one
tasks.taskSyncRandomWords();

// Execution of task two
tasks.taskSyncFizzBuzzWords();

// Execution of task three version 1
tasks.taskAsyncRandomWords();

// Execution of task three version 2
tasks.taskAsyncFizzBuzzWords();

// Execution of task four version 1
tasks.taskSyncWithErrorHandling();

// Execution of task four version 2
tasks.taskAsyncWithErrorHandling();

createFile();
// Execution of task five version 1
tasks.taskSyncWithWriteToFile();

createFile();
// Execution of task five version 2
tasks.taskAsyncWithWriteToFile();
*/

createFile();
// Task to test performance with slow mode enabled. To enable slow mode SLOW_MODE_ENABLED config need to be set to true.
tasks.taskAsyncWithTimer();

