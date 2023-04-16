const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all contacts
router.get('/', async (req, res, next) => {
    try {
        const contacts = await db.all('SELECT * FROM contacts');
        res.json(contacts);
    } catch (err) {
        next(err);
    }
});

// POST a new contact
router.post('/', async (req, res, next) => {
    try {
        const { name, email, phone } = req.body;
        const result = await db.run(
            'INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)',
            [name, email, phone]
        );
        res.status(201).json({});
    } catch (err) {
            next(err);
    }
});

// DELETE a contact
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await db.run('DELETE FROM contacts WHERE id = ?', [id]);
        if (result.changes === 0) {
            res.status(404).json({ error: 'Contact not found' });
        } else {
            res.status(204).json({});
        }
    } catch (err) {
        next(err);
    }
});

// PUT (update) a contact
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;
        const result = await db.run(
            'UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id = ?',
            [name, email, phone, id]
        );
        if (result.changes === 0) {
            res.status(404).json({ error: 'Contact not found' });
        } else {
            res.status(204).json({});
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
