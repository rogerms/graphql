//@ts-check
import coursesData from './data'


const updateCourseTopic = function({id, topic}) {
  coursesData.map(course => {
      if (course.id === id) {
          course.topic = topic;
          return course;
      }
  });
  
  return coursesData.filter(course => course.id === id) [0];
}

export default updateCourseTopic ;