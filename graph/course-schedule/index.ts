const detectCycle = (course: number, classesNeeded: number[][], visited: boolean[]) => {
  const reqs = classesNeeded[course];

  if (visited[course]) return true;
  if (!reqs.length) return false;

  visited[course] = true;

  while (reqs.length) {
      if (detectCycle(reqs[reqs.length - 1], classesNeeded, visited)) return true;
      reqs.pop();
  }

  visited[course] = false;
  return false;
}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  if (prerequisites.length === 0) return true;

  const classesNeeded: number[][] = Array.from({ length: numCourses }, () => []);
  prerequisites.forEach(([course, prereq]) => {
      classesNeeded[course].push(prereq);
  });

  const visited = Array.from({ length: numCourses }, () => false);

  for (const [course, _] of prerequisites) {
      if (detectCycle(course, classesNeeded, visited)) return false
  }

  return true;
};
