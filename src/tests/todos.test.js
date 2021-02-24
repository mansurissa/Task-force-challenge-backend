import mocha from 'mocha';
import chai from 'chai';
import request from 'supertest';
import app from '../index.js';
import User from '../models/userModal';
import Todo from '../models/todosModel';

const { it, describe, beforeEach, afterEach } = mocha;
const { expect } = chai;

const mockUser = {
  names: 'tester',
  email: 'egide123@gmail.com',
  password: '123abc'
};
const mockTodo = {
  title: 'testing title',
  description: 'This description is being used in test',
  priority: 'MEDIUM'
};
const mockLoginCredentials = {
  email: 'egide123@gmail.com',
  password: '123abc'
};

const siginIn = async (user) => {
  await request(app).post('/api/users/register').send(mockUser);
  const userData = await request(app).post('/api/users/signin').send(user);
  return `Bearer ${userData.body.data.token}`;
};
describe('Todos related tests:', () => {
  beforeEach(async () => {
    await User.deleteMany({});
    await Todo.deleteMany({});
  });

  afterEach(async () => {
    await Todo.deleteMany({});
    await User.deleteMany({});
  });
  it('Should Create a todo item', async () => {
    const token = await siginIn(mockLoginCredentials);
    console.log('gggg', token);
    const res = await request(app)
      .post('/api/todos')
      .send(mockTodo)
      .set('auth', token);
    expect(res.status).to.be.equal(201);
  });
  it('Should Get todos', async () => {
    const token = await siginIn(mockLoginCredentials);
    const res = await request(app).get('/api/todos').set('auth', token);
    expect(res.status).to.be.equal(200);
  });
  it('Should not Get todos no (token)', async () => {
    const res = await request(app).get('/api/todos').set('auth', 'm');
    expect(res.status).to.be.equal(401);
  });
  it('Should update todo item', async () => {
    const token = await siginIn(mockLoginCredentials);
    const todo = await Todo.create(mockTodo);
    await todo.save();
    const res = await request(app)
      .patch(`/api/todos/${todo._id}`)
      .send({
        title: 'testing titl2',
        description: 'This description is being used in test2'
      })
      .set('auth', token);
    expect(res.status).to.be.equal(200);
  });
});
