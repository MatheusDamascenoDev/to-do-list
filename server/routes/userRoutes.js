import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import {
  isAuth, generateToken,
} from '../utils.js';

const userRouter = express.Router();

userRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  }),
);

userRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  }),
);

userRouter.put(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }

      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  }),
);

userRouter.put(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  }),
);

userRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === 'admin@example.com') {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
      }
      await user.deleteOne();
      res.send({ message: 'User Deleted' });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  }),
);

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  }),
);

userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user),
    });
  }),
);

userRouter.post(
  '/:id/newtask',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      const task = {
        title: req.body.title,
        isComplete: Boolean(req.body.isComplete),
      };
      user.tasks.push(task)
      await user.save().then((result) => {
        res.send(result);
      });
    } else (err) => {
      res.status(500).send('Ocorreu um erro ao adicionar item ao array: ' + err);
    }
  }),
);

userRouter.put(
  '/:id/newtask/:taskId',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.set({tasks: req.body})
      await user.save().then((result) => {
        res.send(result);
      });
    } else (err) => {
      res.status(500).send({message: err.response.data});
    }
  }),
);

userRouter.delete(
  '/:id/newtask/:taskId',
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
    if (user) {
      user.tasks.pull({_id: req.params.taskId});
      await user.save().then((result) => {
        res.send(result);
      });
    } else (err) => {
      res.status(500).send('Ocorreu um erro ao apagar a task: ' + err);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao remover objeto do array');
  }
    
  }),
);

// userRouter.put(
//   '/:id/task/:taskId',
//   expressAsyncHandler(async (req, res) => {
//     try {
//       const user = await User.findById(req.params.id);
      
//       console.log(task)
//     if (task) {
      
//       await user.save()
//       res.status(200).send('Task apagada')
//     } else (err) => {
//       res.status(500).send('Ocorreu um erro ao apagar a task: ' + err);
//     }
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Erro ao completar a taks do array: ' + err.response.data);
//     }
    
//   }),
// );


export default userRouter;
