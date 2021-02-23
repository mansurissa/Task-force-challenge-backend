import mocha from 'mocha';
import chai from 'chai';
import request from 'supertest';
import app from '../index.js';
import User from '../models/userModal';

const { it, describe, beforeEach, afterEach } = mocha;
const { expect } = chai;

const mockUser = {
  names: 'tester',
  email: 'egide123@gmail.com',
  password: '123abc'
};
const mockLoginCredentials = {
  email: 'egide123@gmail.com',
  password: '123abc'
};

describe('User related tests:', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it('Should create a user', async () => {
    const res = await request(app).post('/api/users/register').send(mockUser);
    expect(res.status).to.be.equal(201);
    expect(res.body).to.have.property('success', true);
    expect(res.body).to.be.a('object');
  });

  it('Shouldnot create create a user(missing field)', async () => {
    const res = await request(app).post('/api/users/register').send({
      name: 'name',
      email: 'email@gmail.com'
    });
    expect(res.status).to.be.equal(500);
    expect(res.body).to.have.property('success', false);
    expect(res.body).to.be.a('object');
  });

  it('Should not create create a user(short password)', async () => {
    const res = await request(app).post('/api/users/register').send({
      name: 'name',
      email: 'email@gmail.com',
      password: 'r'
    });
    expect(res.status).to.be.equal(500);
    expect(res.body).to.have.property('success', false);
    expect(res.body).to.be.a('object');
  });

  it('User should log in', async () => {
    await request(app).post('/api/users/register').send(mockUser);
    const res = await request(app)
      .post('/api/users/signin')
      .send(mockLoginCredentials);
    expect(res.status).to.be.equal(200);
    expect(res.body).to.have.property('success', true);
    expect(res.body).to.be.a('object');
  });

  it('User should not log in (incorect password)', async () => {
    await request(app).post('/api/users/register').send(mockUser);
    const res = await request(app).post('/api/users/signin').send({
      email: 'egide123@gmail.com',
      password: '123ab'
    });
    expect(res.status).to.be.equal(401);
    expect(res.body).to.have.property('success', false);
    expect(res.body).to.be.a('object');
  });
});
