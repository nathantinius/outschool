import Image from "next/image";
import styles from "./page.module.css";
import { TestComponent } from "@/components/TestComponent";
import { EmployeeCard } from "@/components/EmployeeCard";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.horizontal}>
        <div className={styles.helloWorld}>
          <h1>Hello World</h1>
        </div>
        <div className={styles.yeah}>
          <p>YEAH!</p>
        </div>
      </div>
      <TestComponent />
      <div className={styles.employeeCardList}>
        <EmployeeCard employeeName={"Nathan"} title={"Teacher"} email={"nathan@fakeemail.com"} yearsAtCompany={10}/>
        <EmployeeCard employeeName={"David"} title={"Student"} email={"david@fakeemail.com"} yearsAtCompany={5}/>
        <EmployeeCard employeeName={"Xavier"} title={"Student"} email={"xavier@fakeemail.com"} yearsAtCompany={4}/>
        <EmployeeCard employeeName={"George"} title={"Student"} email={"george@fakeemail.com"} yearsAtCompany={7}/>
        <EmployeeCard employeeName={"Julie"} title={"Substitute Teacher"} email={"julie@fakeemail.com"} yearsAtCompany={1}/>
      </div>
    </div>
  );
}
