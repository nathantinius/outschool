import React from 'react'
import styles from './EmployeeCard.module.css';
import Image from 'next/image';

export const EmployeeCard = ({imageURL, employeeName, title, email, yearsAtCompany}) => {
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.employeeImageWrapper}>
            <img className={styles.employeeImage} src={"./person.jpeg"} />
        </div>
        <div>
            <h2>
                {employeeName}
            </h2>
            <h3>{title}</h3>
        </div>
        <p>Email: {email}</p>
        <p>Years at company: {yearsAtCompany}</p>
    </div>
  )
}
