//@ts-check
import chai, {expect} from 'chai';
import axios from 'axios';



const url = `http://localhost:4000`;
const request = require('supertest')(url);

chai.should();

describe('GraphQL', () => {
    it('Returns user with id = 1', (done) => {
        request.post('/graphql')
        .send({ query: '{ course(id: 2) { title  author} }'})
        .expect(200)
        .end((err,res) => {
            if (err) return done(err);
            res.body.data.course.should.be.a('object');
            res.body.data.course.should.have.property('title')
            res.body.data.course.should.have.property('author')
            done();
        })
    })
      
    it('Await calls',  function(done) {
      axios.post('http://localhost:4000/graphql/', {query: '{courses { title author }} '} )
      .then(function (response) {
       // console.log('resp', response.data);
        response.data.data.courses.should.be.a('array');
        done();
      })
      .catch(function (error) {
        console.log("err", error);
      });
    })

    
    it('Returns all users', (done) => {
      request.post('/graphql')
      .send({ query: '{ courses { title  author} }' })
      .expect(200)
      .end((err, res) => {
          if (err) return done(err);
          res.body.data.courses.should.be.a('array');
          res.body.data.courses.should.have.lengthOf.above(2);
          done();
      })  
    })

    it.skip('Test schemas', (done) => {
      // const result = await tester.graphql(query, {}, {}, args);
      // expect(result.data.license.id).to.be.eq("1234");
      // expect(result.data.license.body).to.be.eq("This is a test license");
      // expect(result.data.license.description).to.be.eq(
      //   `This is a description with key ${args.key}`
      // );
    })
});