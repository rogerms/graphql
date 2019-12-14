import { getCourse, getCourses } from './queryResolvers';
import  updateCourseTopic from './mutationResolvers'

var resolvers = {
  course: getCourse,
  courses: getCourses,
  updateCourseTopic: updateCourseTopic
};

export default resolvers