const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]
const passingGrades = grades.filter(grade => grade >= 70)
const averagePassingGrades = passingGrades.reduce((sum, grade) => sum + grade / passingGrades.length, 0)

console.log(grades)
console.log(passingGrades)
console.log(averagePassingGrades)
