import styles from "@/app/page.module.css";

export class TodoTask{
    value: string;
    is_completed: boolean

    constructor(value: string){
        this.value = value;
        this.is_completed = false;
    }

    makeTag(){
        return ((<TodoItem taskValue={this.value} taskStatus={this.is_completed} />));
    }
}

export default function TodoItem(
    { taskValue, taskStatus }:
    { taskValue: string, taskStatus: boolean }
    ) {
    return (
        <div className={styles.taskRow}>
            <div className={styles.taskCheckBox}>
                <input type="checkbox" checked={taskStatus} />
            </div>
            <div className={styles.taskItem}>
                <span>{taskValue}</span>
            </div>
        </div>
    );
}
