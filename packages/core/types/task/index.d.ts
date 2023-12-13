/**
 * Task reads various data and information from DB,and operates based on a certain condition to create,
 * sort,merge data as the user desires.All available tasks are located in Rule Task Toolbar.The user
 * simply selects the task and drag drop to Rule Editor to use the task.
 */
export interface Task {
}
/**
 *  Startable Task
 *  Start Task,DB Read Task,File Read Task,Cache Read Task
 */
export interface StartableTask extends Task {
}
export declare enum StartableTaskEnum {
    START = 1,
    DB_READ = 2,
    FILE_READ = 3,
    CACHE_READ = 4
}
/**
 *  Endable Task
 *  End Task,DB Write Task,File Write Task,Cache Write
 */
export interface EndableTask extends Task {
}
/**
 *  Operation Task
 *  DB Inner Query Task,Filter Task,Group Task,Assign Task,Sort Task,
 */
export interface OperationTask extends Task {
}
/**
 *  Connection Task
 *  Join Task,Combine Task,Merge Task
 */
export interface ConnectionTask extends Task {
}
/**
 *  Flow Control Task
 *  Switch Task,Case Task,Link Task
 */
export interface FlowControlTask extends Task {
}
/**
 *  User Source Task
 *  User Source Task
 */
export interface UserSourceTask extends Task {
}
/**
 *  Unit Rule Task
 *  Rule Call Task,Group Rule Task,Sub Rule Task
 */
export interface UserSourceTask extends Task {
}
