import CourseCard from "../../components/courseCard";
import styles from "../../styles/Courses.module.css";

export default function Courses() {
  return (
    <div className={styles.page}>
      <div className={styles.pageTop}>
        <h1 className={styles.pageTitle}>Engineering Courses</h1>
        <p className={styles.pageDescription}>
          Here are some of the courses that I took at my school in France or at
          the University of Stavanger in Norway during my semester abroad.
        </p>
      </div>
      <main className={styles.courseList}>
        {courses.map((course, id) => (
          <CourseCard
            key={id}
            courseName={course.name}
            imagePath={`/images/courses/${course.imagePath}`}
          />
        ))}
      </main>
    </div>
  );
}

const courses = [
  { name: "Algebra", imagePath: "algebra.png" },
  { name: "Computer Architecture", imagePath: "computerArchitecture.png" },
  { name: "Integrals", imagePath: "integrals.png" },
  { name: "Networks", imagePath: "networks.png" },
  { name: "Probabilities", imagePath: "probabilities.png" },
  { name: "Programming", imagePath: "programming.png" },
  { name: "Signal Processing", imagePath: "signalProcessing.png" },
  { name: "Statistical Learning", imagePath: "statisticalLearning.png" },
  { name: "Statistics", imagePath: "statistics.png" },
  { name: "Text Mining", imagePath: "textMining.png" },
];
