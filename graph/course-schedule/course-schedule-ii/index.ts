function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = new Map()
  const inDegree = new Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
      graph.set(i, []);
  }

  for(const [course, prereq] of prerequisites) {
      graph.get(prereq)?.push(course);
      inDegree[course]++;
  }

  const queue: number[] = [];

  for(let i = 0; i < numCourses; i++) {
      if(inDegree[i] === 0) queue.push(i)
  }

  const result: number[] = [];

  while(queue.length > 0) {
      const course = queue.shift()!;
      result.push(course)

      for(const nextCourse of graph.get(course) || []) {
          inDegree[nextCourse]--;
          if (inDegree[nextCourse] === 0) {
              queue.push(nextCourse);
          }
      }
  }

  return result.length === numCourses ? result : [];
};
