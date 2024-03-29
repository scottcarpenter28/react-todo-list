import styles from "@/app/page.module.css";

export class TodoTask{
    value: string;
    is_completed: boolean

    constructor(value: string){
        this.value = value;
        this.is_completed = false;
    }

    makeTag(): JSX.Element{
        return ((<TodoItem taskValue={this.value} taskStatus={this.is_completed} />));
    }
}

export default function TodoItem(
    { taskValue, taskStatus }:
    { taskValue: string, taskStatus: boolean }
    ): JSX.Element {
    return (
        <div className={styles.taskRow}>
            <div className={styles.taskCheckBox}>
                <input type="checkbox" defaultChecked={taskStatus} />
            </div>
            <div className={styles.taskItem}>
                <span>{taskValue}</span>
            </div>
        </div>
    );
}
