export declare class TaskQueue {
    private queue;
    private running;
    add<T>(task: () => Promise<T>): Promise<T>;
    private runTasks;
}
