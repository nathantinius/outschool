import { TestComponent } from "@/components/TestComponent";
import styles from "../page.module.css";
export default function Hello() {
    return (
        <div className={styles.main}>
            <TestComponent />
        </div>
    );
}