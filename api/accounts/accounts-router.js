
const express = require('express');
const Accounts = require('./accounts-model.js');
const md = require('./accounts-middleware.js');
const router = express.Router();


router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
 Accounts.getAll()
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(next)
})

router.get('/:id', md.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const account = await Accounts.getById(req.params.id)
    res.status(200).json(account)
  } catch(err) {
    next(err)
  }
})

router.post('/', md.checkAccountNameUnique, md.checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.create(req.body)
    .then(newAccount => {
      res.status(201).json(newAccount)
    })
    .catch(next)
})

router.put('/:id', md.checkAccountId, md.checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.updateById(req.params.id, req.body)
    .then(() => {
      return Accounts.getById(req.params.id)
    })
    .then(account => {
      res.status(200).json(account)
    })
    .catch(next)
});

router.delete('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.deleteById(req.params.id)
    .then(() => {
      res.status(200).json(req.account)
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  }) 
})

module.exports = router;
