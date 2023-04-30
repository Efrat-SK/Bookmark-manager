const router = require('express').Router()

const bmItemsModel = require('../models/bmItems')

router.post('/api/item', async (req, res) => {
    try {
        const newItem = new bmItemsModel({
            itemText: req.body.itemText,
            itemTitle: req.body.itemTitle
        })
        const saveItem = await newItem.save()
        res.status(200).json(saveItem)
    } catch (err) {
       req.json(err)
    }
})

router.get('/api/items', async (req, res) => {
    try {
        const allBmItem = await bmItemsModel.find({})
        res.status(200).json(allBmItem)
    } catch (err) {
        req.json(err)
    }
})

router.delete('/api/item/:id', async (req, res) => {
    try {
        const deleteItem = await bmItemsModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Item deleted successfully')
    } catch (err) {
        res.json(err)
    }
})

module.exports = router