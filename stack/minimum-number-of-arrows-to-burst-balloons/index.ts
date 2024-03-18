function findMinArrowShots(points: number[][]): number {
  if(points.length < 2) return points.length

  points.sort((a, b) => a[0] - b[0])
  const stack: number[][] = []
  stack.push(points[0])
  for(let i = 1; i < points.length; i++) {
      const previousPoint = stack.pop()!
      const currentPoint = points[i]
      if(previousPoint[1] < currentPoint[0]) {
          stack.push(previousPoint)
          stack.push(currentPoint)
      } else {
          const maxPoint = Math.min(previousPoint[1], currentPoint[1])
          const minPoint = Math.max(previousPoint[0], currentPoint[0])
          stack.push([minPoint, maxPoint])
      }
  }

  return stack.length
};
